'use client';

import React from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

interface EnquiryModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function EnquiryModal({ open, onOpenChange }: EnquiryModalProps) {
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            company: '',
            location: '',
            serviceArea: '',
            message: '',
            contactPreferences: {
                phone: false,
                email: false,
                whatsapp: false,
            },
        },
    });

    const onSubmit = () => {
        // Handle form submission here
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="p-8 rounded-3xl sm:max-w-4xl">
                <ScrollArea className="max-h-[80vh] overflow-y-auto p-4">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold text-green-600 mb-6">Send a Message</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    name="fullName"
                                    control={form.control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name (required)</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="bg-gray-50 border-gray-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="email"
                                    control={form.control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail Address (required)</FormLabel>
                                            <FormControl>
                                                <Input type="email" {...field} className="bg-gray-50 border-gray-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="phone"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone/WhatsApp Number (optional)</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="bg-gray-50 border-gray-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="company"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company/Organization (optional)</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="bg-gray-50 border-gray-200" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="location"
                                    control={form.control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location (required)</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="bg-gray-50 border-gray-200">
                                                        <SelectValue placeholder="Select location" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="nigeria">Nigeria</SelectItem>
                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                        <SelectItem value="usa">United States</SelectItem>
                                                        <SelectItem value="canada">Canada</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="serviceArea"
                                    control={form.control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service area of Interest (required)</FormLabel>
                                            <FormControl>
                                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="bg-gray-50 border-gray-200">
                                                        <SelectValue placeholder="Select service area" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="international-payments">
                                                            International Payments
                                                        </SelectItem>
                                                        <SelectItem value="currency-exchange">
                                                            Currency Exchange
                                                        </SelectItem>
                                                        <SelectItem value="business-solutions">
                                                            Business Solutions
                                                        </SelectItem>
                                                        <SelectItem value="personal-banking">
                                                            Personal Banking
                                                        </SelectItem>
                                                        <SelectItem value="api-integration">API Integration</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="message"
                                control={form.control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message (required)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Please share the details about the service you're looking for..."
                                                className="bg-gray-50 border-gray-200 min-h-[120px] resize-none"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-4 items-center w-full">
                                <div className="space-y-3 w-full">
                                    <FormLabel>How would you like us to contact you?</FormLabel>
                                    <div className="flex flex-wrap gap-6">
                                        <FormField
                                            name="contactPreferences.phone"
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <Checkbox
                                                            id="phone-contact"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor="phone-contact"
                                                        className="text-sm text-gray-600"
                                                    >
                                                        Phone
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            name="contactPreferences.email"
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <Checkbox
                                                            id="email-contact"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor="email-contact"
                                                        className="text-sm text-gray-600"
                                                    >
                                                        E-mail
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            name="contactPreferences.whatsapp"
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex items-center space-x-2">
                                                    <FormControl>
                                                        <Checkbox
                                                            id="whatsapp-contact"
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormLabel
                                                        htmlFor="whatsapp-contact"
                                                        className="text-sm text-gray-600"
                                                    >
                                                        WhatsApp
                                                    </FormLabel>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Button
                                        type="submit"
                                        className="w-full !rounded-lg bg-green-500 hover:bg-green-600 text-white py-3 text-base font-medium shadow-none"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
