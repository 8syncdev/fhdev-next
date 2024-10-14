'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle, AlertCircle, Clock, DollarSign, Info, Asterisk, Phone, CreditCard as BankCard, Loader2, Zap, Shield, Gift, Star, Globe, CheckIcon } from 'lucide-react';
import { MotionDiv } from '@/components/shared/hoc';
import { fadeIn, bounceIn, staggerContainer, zoomIn, slideIn } from '@/components/shared/hoc/motion/animations';
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { BlurDeco } from '@/components/shared';
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';

const formSchema = z.object({
    courseName: z.string(),
    price: z.number(),
    purchaseDate: z.string(),
    phone: z.string().min(10, { message: "Số điện thoại phải có ít nhất 10 số" }),
    email: z.string().email({ message: "Email không hợp lệ" }),
    linkFb: z.string().url({ message: "Link Facebook không hợp lệ" }).optional().or(z.literal('')),
    fullName: z.string().min(2, { message: "Họ tên phải có ít nhất 2 ký tự" }),
    selectedPlan: z.string().optional()
});

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const CourseInfo: React.FC<{ course: any }> = React.memo(({ course }) => {
    const discountPercentage = Math.round((1 - course.price / course.originalPrice) * 100);

    return (
        <MotionDiv variants={zoomIn({ delay: 0.3, duration: 0.5 })}>
            <Card className="bg-transparent border-2 border-blue-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
                <CardHeader className="bg-blue-900/20 p-6">
                    <CardTitle className="text-2xl font-bold text-center text-blue-400 mb-2">{course.nameCourse}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center md:space-x-6">
                        <Image
                            src={course.imgSrc}
                            alt={course.nameCourse}
                            width={150}
                            height={150}
                            className="rounded-lg border-4 border-violet-500 mb-4 md:mb-0 transform hover:scale-105 transition-transform duration-300"
                        />
                        <div className="text-center md:text-left">
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
                                <Badge variant="secondary" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                                    Giảm {discountPercentage}%
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </MotionDiv>
    );
});

const PaymentInstructions: React.FC = React.memo(() => (
    <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.4, duration: 0.5 })}>
        <Card className="bg-transparent border-2 border-indigo-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 my-6">
            <CardHeader className="bg-indigo-900/20 p-6">
                <CardTitle className="text-2xl font-bold text-center text-indigo-400 mb-2">Hướng dẫn thanh toán</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <ul className="list-none text-white text-lg space-y-3">
                    {[
                        { icon: <CreditCard className="h-6 w-6 text-yellow-400" />, text: "Chuyển khoản với nội dung: Họ và tên - Số điện thoại", isHtml: true },
                        { icon: <CheckCircle className="h-6 w-6 text-green-400" />, text: "Sau khi chuyển khoản thành công, điền form bên dưới và gửi để chờ kết quả", isHtml: false },
                        { icon: <Phone className="h-6 w-6 text-pink-400" />, text: "Hoặc liên hệ số điện thoại", phone: brand.author.phone, name: brand.author.name, isHtml: false }
                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            {item.icon}
                            {item.isHtml ? (
                                <span className="ml-2">
                                    Chuyển khoản với nội dung: <strong>Họ và tên - Số điện thoại</strong>
                                </span>
                            ) : item.phone ? (
                                <span className="ml-2">
                                    {item.text} <a href={`tel:${item.phone}`} className="text-yellow-300 underline">{item.phone} ({item.name})</a> để xác nhận thanh toán sau khi chuyển tiền
                                </span>
                            ) : (
                                <span className="ml-2">{item.text}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </MotionDiv>
));

const QRCodeDialog: React.FC = () => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline"
                className="flex items-center justify-center space-x-2 text-lg py-6 px-8 w-full md:w-auto bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,255,0.5)]">
                <BankCard className="h-6 w-6" />
                <span>Hiển thị mã QR</span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Quét mã QR để thanh toán</DialogTitle>
                <DialogDescription>
                    Sử dụng ứng dụng ngân hàng của bạn để quét mã QR bên dưới.
                </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center p-4">
                <Image
                    src={qrcode1Img}
                    alt="QR Code for payment"
                    width={350}
                    height={350}
                    className="rounded-lg shadow-xl border-4 border-blue-500"
                />
            </div>
        </DialogContent>
    </Dialog>
);

const ComboPlans: React.FC<{ onPlanSelect: (plan: string | null) => void }> = React.memo(({ onPlanSelect }) => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const plans = [
        {
            title: "BASIC",
            price: "3300K",
            originalPrice: "4500K",
            duration: "4 tháng",
            features: [
                "1 KHÓA CNTT",
                "45 buổi học CNTT chuyên sâu",
                "3 tập sách song ngữ Anh - Việt",
                "45 slide, tài liệu buổi học",
                "45 tiết học qua video"
            ],
            icon: <Globe className="w-8 h-8 text-blue-400" />,
            color: "blue"
        },
        {
            title: "PREMIUM",
            price: "5200K",
            originalPrice: "7500K",
            duration: "6 tháng", 
            features: [
                "1 KHÓA CNTT + 1 TACN",
                "45 buổi học CNTT chuyên sâu",
                "18 buổi tiếng anh chuyên ngành CNTT",
                "3 tập sách song ngữ Anh - Việt",
                "63 slide, video tài liệu buổi học",
                "Nhóm Kèm riêng đặc biệt",
                "Học lại miễn phí 1 lần"
            ],
            icon: <Star className="w-8 h-8 text-purple-400" />,
            color: "purple"
        },
        {
            title: "LUXURY",
            price: "8000K",
            originalPrice: "12000K",
            duration: "10 tháng",
            features: [
                "2 KHÓA CNTT + 1 TACN",
                "90 buổi học CNTT chuyên sâu",
                "18 buổi tiếng anh chuyên ngành CNTT",
                "6 tập sách song ngữ Anh - Việt",
                "Kiểm tra, sửa chữa từng bài tập",
                "108 slide, video, tài liệu buổi học",
                "Nhóm kèm riêng Vip",
                "Học lại miễn phí 2 lần"
            ],
            icon: <Gift className="w-8 h-8 text-green-400" />,
            color: "green"
        }
    ];

    const handlePlanSelect = (plan: string) => {
        setSelectedPlan(prevPlan => prevPlan === plan ? null : plan);
        onPlanSelect(selectedPlan === plan ? null : plan);
    };

    return (
        <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.5, duration: 0.5 })}>
            <Card className="bg-transparent border-2 border-purple-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all duration-300 my-6">
                <CardHeader className="bg-purple-900/20 p-6">
                    <CardTitle className="text-2xl font-bold text-center text-purple-400 mb-2">Chọn Gói Combo</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid gap-6 md:grid-cols-3">
                        {plans.map((plan, index) => (
                            <MotionDiv
                                key={plan.title}
                                variants={zoomIn({ delay: 0.1 * index, duration: 0.5 })}
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div className="absolute right-4 top-4 z-10">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            id={plan.title}
                                            checked={selectedPlan === plan.title}
                                            onChange={() => handlePlanSelect(plan.title)}
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor={plan.title}
                                            className={`block w-6 h-6 rounded-lg border-2 ${selectedPlan === plan.title ? `bg-${plan.color}-500 border-${plan.color}-500` : `border-${plan.color}-500`} cursor-pointer transition-all duration-300`}
                                        >
                                            {selectedPlan === plan.title && (
                                                <CheckIcon className="w-5 h-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                            )}
                                        </label>
                                    </div>
                                </div>
                                <Label htmlFor={plan.title} className="cursor-pointer">
                                    <Card className={`w-full bg-transparent border-2 border-${plan.color}-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300 ${selectedPlan === plan.title ? `shadow-[0_0_25px_rgba(0,255,255,0.5)]` : ''}`}>
                                        <CardHeader className={`bg-${plan.color}-900/20 p-6`}>
                                            <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-900/20 flex items-center justify-center`}>
                                                {plan.icon}
                                            </div>
                                            <CardTitle className={`text-2xl font-bold text-center text-${plan.color}-400 mb-2`}>{plan.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <div className="text-center mb-6">
                                                <p className={`text-4xl font-bold text-${plan.color}-400`}>{plan.price}</p>
                                                <p className="text-sm text-gray-400 line-through">Giá gốc: {plan.originalPrice}</p>
                                                <p className="text-sm text-gray-400">{plan.duration}</p>
                                            </div>
                                            <ul className="space-y-2">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <CheckIcon className={`w-5 h-5 text-${plan.color}-400 mr-2 flex-shrink-0`} />
                                                        <span className="text-sm text-gray-300">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </Label>
                            </MotionDiv>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </MotionDiv>
    );
});

const PaymentForm: React.FC<{ form: any, onSubmit: any, isSubmitting: boolean, showCombo: boolean }> = React.memo(({ form, onSubmit, isSubmitting, showCombo }) => (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <MotionDiv variants={fadeIn({ direction: 'up', delay: 0.5, duration: 0.5 })}>
                <Card className="bg-transparent border-2 border-purple-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all duration-300">
                    <CardHeader className="bg-purple-900/20 p-6">
                        <CardTitle className="text-2xl font-bold text-center text-purple-400 mb-2">Thông tin cần điền</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <ul className="list-none text-white text-lg space-y-3">
                            {[
                                { icon: <Phone className="h-6 w-6 text-green-400" />, text: "Số điện thoại (bắt buộc)" },
                                { icon: <Zap className="h-6 w-6 text-yellow-400" />, text: "Email (bắt buộc)" },
                                { icon: <Shield className="h-6 w-6 text-blue-400" />, text: "Link Facebook (tùy chọn)" },
                                { icon: <Gift className="h-6 w-6 text-pink-400" />, text: "Họ và tên (bắt buộc)" }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {item.icon}
                                    <span className="ml-2">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </MotionDiv>
            
            {showCombo && (
                <ComboPlans onPlanSelect={(plan) => form.setValue('selectedPlan', plan)} />
            )}
            
            {['phone', 'email', 'linkFb', 'fullName', 'courseName', 'price', 'purchaseDate'].map((fieldName, index) => (
                <MotionDiv key={fieldName} variants={slideIn({ direction: 'right', type: 'spring', delay: 0.1 * index, duration: 0.5 })}>
                    <FormField
                        control={form.control}
                        name={fieldName as any}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="flex items-center text-lg text-white">
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
                                        className="text-lg p-6 bg-transparent border-blue-500 text-white focus:border-pink-500 transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,255,0.3)]"
                                        disabled={isSubmitting || ['courseName', 'price', 'purchaseDate'].includes(fieldName)}
                                    />
                                </FormControl>
                                <FormDescription className="text-base text-gray-400">
                                    {['phone', 'email', 'fullName'].includes(fieldName) ? 'Bắt buộc' :
                                     fieldName === 'linkFb' ? 'Tùy chọn' : 'Không thể chỉnh sửa'}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </MotionDiv>
            ))}
            
            <MotionDiv variants={fadeIn({
                direction: 'up',
                delay: 0.6,
                duration: 0.5
            })}>
                <div className="mt-8">
                    <p className="text-center mb-6 text-xl text-white">Quét mã QR để thanh toán:</p>
                    <div className="flex justify-center">
                        <Image
                            src={qrcode1Img}
                            alt="QR Code for payment"
                            width={300}
                            height={300}
                            className="rounded-lg shadow-xl border-4 border-blue-500 transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </MotionDiv>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-8">
                <MotionDiv variants={bounceIn({
                    delay: 0.7,
                    duration: 0.5
                })}>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline"
                                className="flex items-center justify-center space-x-2 text-lg py-6 px-8 w-full md:w-auto bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,255,0.5)]"
                                disabled={isSubmitting}>
                                <BankCard className="h-6 w-6" />
                                <span>Thanh toán bằng thẻ</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Quét mã QR để thanh toán</DialogTitle>
                                <DialogDescription>
                                    Sử dụng ứng dụng ngân hàng của bạn để quét mã QR bên dưới.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex justify-center p-4">
                                <Image
                                    src={qrcode1Img}
                                    alt="QR Code for payment"
                                    width={350}
                                    height={350}
                                    className="rounded-lg shadow-xl border-4 border-blue-500"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                </MotionDiv>
                <MotionDiv variants={bounceIn({
                    delay: 0.8,
                    duration: 0.5
                })}>
                    <Button type="submit" variant="default"
                        className="bg-transparent border-2 border-green-500 text-white hover:bg-green-500 flex items-center justify-center space-x-2 text-lg py-6 px-8 w-full md:w-auto transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                        disabled={isSubmitting}>
                        {isSubmitting ? (
                            <Loader2 className="h-6 w-6 animate-spin mr-2" />
                        ) : (
                            <CheckCircle className="h-6 w-6 mr-2" />
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
        fullName: '',
        selectedPlan: ''
    });

    const [course, setCourse] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCombo, setShowCombo] = useState(false);
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
            
            // Check if the course is in the foundation category
            setShowCombo(foundCourse.category === 'foundation');
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
                Gói đã chọn: ${values.selectedPlan || 'Không áp dụng'}
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
            <Card className="max-w-3xl mx-auto bg-transparent text-white shadow-2xl border-blue-900">
                <CardHeader>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">Thanh Toán Khóa Học</CardTitle>
                </CardHeader>
                <CardContent>
                    {course && <CourseInfo course={course} />}
                    <PaymentInstructions />
                    <PaymentForm form={form} onSubmit={onSubmit} isSubmitting={isSubmitting} showCombo={showCombo} />
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
