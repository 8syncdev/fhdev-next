'use client'

import React, { useState } from 'react';
import { MotionDiv, fadeIn, staggerContainer, bounceIn, zoomIn } from '@/components/shared/hoc';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BlurDeco } from '@/components/shared';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { sendEmail } from '@/server/actions/email.action';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Tên phải có ít nhất 2 ký tự' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  phone: z.string().min(10, { message: 'Số điện thoại không hợp lệ' }),
  message: z.string().min(10, { message: 'Tin nhắn phải có ít nhất 10 ký tự' }),
});

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(values.email, values.message);
      if (result) {
        toast({
          title: 'Gửi tin nhắn thành công',
          description: 'Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.',
        });
        form.reset();
      } else {
        throw new Error('Gửi email thất bại');
      }
    } catch (error) {
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Không thể gửi tin nhắn. Vui lòng thử lại sau.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder="Họ và tên" {...field} className="bg-transparent border-blue-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} className="bg-transparent border-blue-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder="Số điện thoại" type="tel" {...field} className="bg-transparent border-blue-500 text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Nội dung tin nhắn</FormLabel>
              <FormControl>
                <Textarea placeholder="Nội dung tin nhắn" {...field} className="bg-transparent border-blue-500 text-white" rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <MotionDiv
          variants={bounceIn({ delay: 0.7, duration: 0.5 })}
          className="flex justify-center"
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
              <>
                <Send className="mr-2 h-4 w-4" /> Gửi tin nhắn
              </>
            )}
          </Button>
        </MotionDiv>
      </form>
    </Form>
  );
};

const ContactInfo: React.FC = () => {
  const contactDetails = [
    { icon: <Mail className="h-5 w-5 text-blue-400" />, text: "info@example.com" },
    { icon: <Phone className="h-5 w-5 text-green-400" />, text: "+84 123 456 789" },
    { icon: <MapPin className="h-5 w-5 text-red-400" />, text: "123 Đường ABC, Quận XYZ, TP.HCM" },
  ];

  return (
    <div className="space-y-4">
      {contactDetails.map((detail, index) => (
        <MotionDiv
          key={index}
          variants={fadeIn({ direction: 'right', type: 'spring', delay: index * 0.2, duration: 0.5 })}
          className="flex items-center space-x-3"
        >
          {detail.icon}
          <span className="text-gray-300">{detail.text}</span>
        </MotionDiv>
      ))}
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <MotionDiv
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="container my-16 relative"
    >
      <BlurDeco brightness={10} variant='gradient' />
      <MotionDiv variants={bounceIn({ delay: 0.2, duration: 0.7 })} className="text-center mb-12">
        <Badge variant="secondary" className="mb-4 text-violet-400">Liên Hệ Với Chúng Tôi</Badge>
        <h1 className="text-3xl font-bold text-white mb-4">Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ Bạn</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Bạn có thắc mắc hoặc cần hỗ trợ? Đừng ngần ngại liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </MotionDiv>

      <div className="grid md:grid-cols-2 gap-8">
        <MotionDiv variants={zoomIn({ delay: 0.2, duration: 0.5 })}>
          <Card className="bg-transparent border-2 border-blue-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
            <CardHeader className="bg-blue-900/20 p-6">
              <CardTitle className="text-2xl font-bold text-center text-blue-400 mb-2">Gửi Tin Nhắn</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </MotionDiv>

        <MotionDiv variants={zoomIn({ delay: 0.4, duration: 0.5 })}>
          <Card className="bg-transparent border-2 border-purple-500 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
            <CardHeader className="bg-purple-900/20 p-6">
              <CardTitle className="text-2xl font-bold text-center text-purple-400 mb-2">Thông Tin Liên Hệ</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ContactInfo />
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default React.memo(ContactSection);
