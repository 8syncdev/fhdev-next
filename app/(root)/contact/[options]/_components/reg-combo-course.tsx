'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Clock, Video, Globe, ArrowRight, CheckIcon } from 'lucide-react';
import { MotionDiv, fadeIn, staggerContainer, zoomIn, bounceIn } from '@/components/shared/hoc';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BlurDeco } from '@/components/shared';
import { sendEmail } from '@/server/actions/email.action';
import { toast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự" }),
  email: z.string().email({ message: "Email không hợp lệ" }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Số điện thoại không hợp lệ" }),
  plan: z.enum(["BASIC", "PREMIUM", "LUXURY"]),
  message: z.string().optional(),
});

const plans = [
  {
    title: "BASIC",
    price: "3300K",
    duration: "6 tháng",
    features: [
      "45 buổi học CNTT chuyên sâu",
      "Tập sách song ngữ Anh - Việt",
      "45 slide, tài liệu buổi học",
      "45 bài học qua video"
    ],
    icon: <Clock className="w-8 h-8 text-blue-400" />,
    color: "blue"
  },
  {
    title: "PREMIUM",
    price: "5200K",
    duration: "8 tháng",
    features: [
      "45 buổi học CNTT chuyên sâu",
      "2 buổi tiếng anh",
      "3 tập sách song ngữ Anh - Việt",
      "63 slide, video tài liệu buổi học",
      "Nhóm kèm riêng Vip",
      "Học lại miễn phí 1 lần"
    ],
    icon: <Video className="w-8 h-8 text-purple-400" />,
    color: "purple"
  },
  {
    title: "LUXURY",
    price: "8000K",
    duration: "10 tháng",
    features: [
      "90 buổi học CNTT chuyên sâu",
      "5 buổi tiếng anh",
      "Kiểm tra, sửa chữa từng bài tập",
      "108 slide, video, tài liệu buổi học",
      "Học lại miễn phí 2 lần"
    ],
    icon: <Globe className="w-8 h-8 text-green-400" />,
    color: "green"
  }
];

const RegComboCourse: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: "BASIC",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const content = `
        Tên: ${values.name}
        Email: ${values.email}
        Số điện thoại: ${values.phone}
        Gói đăng ký: ${values.plan}
        Tin nhắn: ${values.message || 'Không có'}
      `;
      const result = await sendEmail(values.email, content);
      if (result) {
        toast({
          title: "Đăng ký thành công",
          description: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
        });
        form.reset();
      } else {
        throw new Error("Gửi email thất bại");
      }
    } catch (error) {
      toast({
        title: "Đăng ký thất bại",
        description: "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container my-16 relative"
    >
      <BlurDeco brightness={10} variant='gradient'/>
      <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.2, duration: 0.5 })}>
        <h2 className="text-3xl font-bold text-center text-white mb-4">Đăng Ký Khóa Học Combo</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Chọn gói học phù hợp với nhu cầu của bạn và bắt đầu hành trình học tập ngay hôm nay!
        </p>
      </MotionDiv>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MotionDiv variants={fadeIn({ direction: 'right', type: 'spring', delay: 0.3, duration: 0.5 })}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Họ và tên</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập họ và tên" {...field} className="bg-transparent border-blue-500 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>

            <MotionDiv variants={fadeIn({ direction: 'left', type: 'spring', delay: 0.3, duration: 0.5 })}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập email" {...field} className="bg-transparent border-blue-500 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </MotionDiv>
          </div>

          <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.4, duration: 0.5 })}>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập số điện thoại" {...field} className="bg-transparent border-blue-500 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </MotionDiv>

          <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.5, duration: 0.5 })}>
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Chọn gói học</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                      {plans.map((plan, index) => (
                        <MotionDiv
                          key={plan.title}
                          variants={zoomIn({ delay: 0.1 * index, duration: 0.5 })}
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <RadioGroupItem
                            value={plan.title}
                            id={plan.title}
                            className="absolute right-4 top-4 h-6 w-6"
                          />
                          <Label htmlFor={plan.title} className="cursor-pointer">
                            <Card className={`w-full bg-transparent border-2 border-${plan.color}-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300`}>
                              <CardHeader className={`bg-${plan.color}-900/20 p-6`}>
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${plan.color}-900/20 flex items-center justify-center`}>
                                  {plan.icon}
                                </div>
                                <CardTitle className={`text-2xl font-bold text-center text-${plan.color}-400 mb-2`}>{plan.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                <div className="text-center mb-6">
                                  <p className={`text-4xl font-bold text-${plan.color}-400`}>{plan.price}</p>
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
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </MotionDiv>

          <MotionDiv variants={fadeIn({ direction: 'up', type: 'spring', delay: 0.6, duration: 0.5 })}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Tin nhắn (tùy chọn)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Nhập tin nhắn của bạn"
                      className="bg-transparent border-blue-500 text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </MotionDiv>

          <MotionDiv
            variants={bounceIn({ delay: 0.7, duration: 0.5 })}
            className="flex justify-center"
          >
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <MotionDiv
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                </MotionDiv>
              ) : (
                "Đăng Ký Ngay"
              )}
            </Button>
          </MotionDiv>
        </form>
      </Form>
    </MotionDiv>
  );
};

export default React.memo(RegComboCourse);
