'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle, AlertCircle, Clock, DollarSign, Info, Asterisk, Phone, CreditCard as BankCard, Loader2 } from 'lucide-react';
import { MotionDiv } from '@/components/shared/hoc';
import { fadeIn, bounceIn } from '@/components/shared/hoc/motion/animations';
import { qrcode1Img } from '@/constants/image';
import { allCourses } from '@/constants/seo/course';
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast"
import { sendEmail } from "@/server/actions/email.action";
import { brand } from '@/constants';

const formSchema = z.object({
    courseName: z.string(),
    price: z.number(),
    purchaseDate: z.string(),
    phone: z.string().min(10, { message: "Số điện thoại phải có ít nhất 10 số" }),
    email: z.string().email({ message: "Email không hợp lệ" }),
    linkFb: z.string().url({ message: "Link Facebook không hợp lệ" }).optional().or(z.literal('')),
    fullName: z.string().min(2, { message: "Họ tên phải có ít nhất 2 ký tự" })
});

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const CourseInfo: React.FC<{ course: any }> = React.memo(({ course }) => {
    const discountPercentage = Math.round((1 - course.price / course.originalPrice) * 100);

    return (
        <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.3, duration: 0.5 })}>
            <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-8 bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
                <Image
                    src={course.imgSrc}
                    alt={course.nameCourse}
                    width={150}
                    height={150}
                    className="rounded-lg border-4 border-violet-500 mb-4 md:mb-0"
                />
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.nameCourse}</h3>
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-4">
                        <div className="flex items-center mb-2 md:mb-0">
                            <Clock className="h-6 w-6 mr-2 text-yellow-400" />
                            <span className="text-lg md:text-xl font-semibold text-yellow-400">{course.duration} giờ</span>
                        </div>
                        <div className="flex items-center">
                            <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                            <span className="text-lg md:text-xl font-semibold text-green-400">{course.price}đ</span>
                            <span className="text-base md:text-lg line-through text-gray-400 ml-2">{course.originalPrice}đ</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-lg font-bold">
                            Giảm {discountPercentage}%
                        </span>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
});

const PaymentInstructions: React.FC = React.memo(() => (
    <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.4, duration: 0.5 })}>
        <div className="bg-blue-900 p-4 md:p-6 rounded-lg mb-8 shadow-lg">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                <Info className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3" />
                Hướng dẫn thanh toán
            </h4>
            <ul className="list-disc list-inside text-white text-base md:text-lg space-y-2 md:space-y-3">
                <li>Chuyển khoản với nội dung: <strong>Họ và tên - Số điện thoại</strong></li>
                <li>Sau khi chuyển khoản thành công, điền form bên dưới và gửi để chờ kết quả</li>
                <li>Hoặc liên hệ số điện thoại <a href={`tel:${brand.author.phone}`} className="text-yellow-300 underline">{brand.author.phone}  {`(${brand.author.name})`}</a> để xác nhận thanh toán sau khi chuyển tiền</li>
            </ul>
        </div>
    </MotionDiv>
));

const PaymentForm: React.FC<{ form: any, onSubmit: any, isSubmitting: boolean }> = React.memo(({ form, onSubmit, isSubmitting }) => (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 shadow-lg">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                    <Info className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3" />
                    Thông tin cần điền
                </h4>
                <ul className="list-disc list-inside text-white text-base md:text-lg space-y-2 md:space-y-3">
                    <li>Số điện thoại (bắt buộc)</li>
                    <li>Email (bắt buộc)</li>
                    <li>Link Facebook (tùy chọn)</li>
                    <li>Họ và tên (bắt buộc)</li>
                </ul>
            </div>
            
            {['phone', 'email', 'linkFb', 'fullName', 'courseName', 'price', 'purchaseDate'].map((fieldName) => (
                <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName as any}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center text-base md:text-lg">
                                {fieldName === 'phone' && 'Số điện thoại'}
                                {fieldName === 'email' && 'Email'}
                                {fieldName === 'linkFb' && 'Link Facebook'}
                                {fieldName === 'fullName' && 'Họ và tên'}
                                {fieldName === 'courseName' && 'Tên khóa học'}
                                {fieldName === 'price' && 'Giá'}
                                {fieldName === 'purchaseDate' && 'Ngày mua'}
                                {['phone', 'email', 'fullName'].includes(fieldName) && (
                                    <Asterisk className="h-3 w-3 text-red-500 ml-1" />
                                )}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder={
                                        fieldName === 'phone' ? 'Ví dụ: 0912345678' :
                                        fieldName === 'email' ? 'Ví dụ: example@gmail.com' :
                                        fieldName === 'linkFb' ? 'Ví dụ: https://facebook.com/username' :
                                        fieldName === 'fullName' ? 'Ví dụ: Nguyễn Văn A' : ''
                                    }
                                    className="text-base md:text-lg p-4 md:p-6"
                                    disabled={isSubmitting || ['courseName', 'price', 'purchaseDate'].includes(fieldName)}
                                />
                            </FormControl>
                            <FormDescription className="text-sm md:text-base">
                                {['phone', 'email', 'fullName'].includes(fieldName) ? 'Bắt buộc' :
                                 fieldName === 'linkFb' ? 'Tùy chọn' : 'Không thể chỉnh sửa'}
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            ))}
            
            <MotionDiv variants={fadeIn({
                direction: 'up',
                delay: 0.6,
                duration: 0.5
            })}>
                <div className="mt-6 md:mt-8">
                    <p className="text-center mb-4 md:mb-6 text-lg md:text-xl">Quét mã QR để thanh toán:</p>
                    <div className="flex justify-center">
                        <Image
                            src={qrcode1Img}
                            alt="QR Code for payment"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </MotionDiv>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-6 md:mt-8">
                <MotionDiv variants={bounceIn({
                    delay: 0.7,
                    duration: 0.5
                })}>
                    <Button type="button" variant="outline"
                        className="flex items-center justify-center space-x-2 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full md:w-auto"
                        disabled={isSubmitting}>
                        <BankCard className="h-5 w-5 md:h-6 md:w-6" />
                        <span>Thanh toán bằng thẻ</span>
                    </Button>
                </MotionDiv>
                <MotionDiv variants={bounceIn({
                    delay: 0.8,
                    duration: 0.5
                })}>
                    <Button type="submit" variant="default"
                        className="bg-green-600 hover:bg-green-700 flex items-center justify-center space-x-2 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full md:w-auto"
                        disabled={isSubmitting}>
                        {isSubmitting ? (
                            <Loader2 className="h-5 w-5 md:h-6 md:w-6 animate-spin mr-2" />
                        ) : (
                            <CheckCircle className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                        )}
                        <span>{isSubmitting ? 'Đang xử lý...' : 'Xác nhận thanh toán'}</span>
                    </Button>
                </MotionDiv>
            </div>
        </form>
    </Form>
));

const PaymentPage: React.FC<Props> = ({ searchParams }) => {
    const [initialData, setInitialData] = useState({
        courseName: '',
        price: 0,
        purchaseDate: new Date().toISOString().split('T')[0],
        phone: '',
        email: '',
        linkFb: '',
        fullName: ''
    });

    const [course, setCourse] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData,
    });

    useEffect(() => {
        const slug = searchParams.slug as string;
        const foundCourse = allCourses.find(c => c.slug === slug);
        if (foundCourse) {
            setCourse(foundCourse);
            const newData = {
                ...initialData,
                courseName: foundCourse.nameCourse,
                price: foundCourse.price,
            };
            setInitialData(newData);
            form.reset(newData);
        }
    }, [searchParams, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            const content = `
                Khóa học: ${values.courseName}
                Giá: ${values.price}
                Ngày mua: ${values.purchaseDate}
                Số điện thoại: ${values.phone}
                Email: ${values.email}
                Link Facebook: ${values.linkFb || 'Không cung cấp'}
                Họ và tên: ${values.fullName}
            `;
            await sendEmail(values.email, content);
            toast({
                title: "Gửi thông tin thành công",
                description: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
                variant: "default",
            });
        } catch (error) {
            toast({
                title: "Gửi thông tin thất bại",
                description: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <MotionDiv
            variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.2, duration: 0.7 })}
            initial="hidden"
            animate="show"
            className="container mx-auto px-4 md:px-6 py-8 md:py-12"
        >
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl border-blue-900">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">Thanh Toán Khóa Học</CardTitle>
                </CardHeader>
                <CardContent>
                    {course && <CourseInfo course={course} />}
                    <PaymentInstructions />
                    <PaymentForm form={form} onSubmit={onSubmit} isSubmitting={isSubmitting} />
                </CardContent>
            </Card>
            <MotionDiv 
                variants={fadeIn({ direction: 'up', delay: 0.9, duration: 0.5 })}
                className="mt-8 md:mt-10 text-center text-gray-300"
            >
                <p className="flex items-center justify-center text-lg md:text-xl">
                    <AlertCircle className="h-6 w-6 md:h-8 md:w-8 mr-2 md:mr-3 text-yellow-500" />
                    Nếu bạn gặp vấn đề trong quá trình thanh toán, vui lòng liên hệ hỗ trợ.
                </p>
                <p className="mt-3 md:mt-4 text-base md:text-lg">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 inline mr-2 text-green-400" />
                    Hotline: <a href={`tel:${brand.author.phone}`} className="text-green-400 underline">{brand.author.phone} {`(${brand.author.name})`}</a>
                </p>
            </MotionDiv>
        </MotionDiv>
    );
};

export default React.memo(PaymentPage);
