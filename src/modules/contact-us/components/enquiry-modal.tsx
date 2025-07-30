"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface EnquiryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EnquiryModal({ open, onOpenChange }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    serviceArea: "",
    message: "",
    contactPreferences: {
      phone: false,
      email: false,
      whatsapp: false,
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    onOpenChange(false)
  }

  const handleContactPreferenceChange = (preference: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contactPreferences: {
        ...prev.contactPreferences,
        [preference]: checked,
      },
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-10 rounded-3xl sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-green-600 mb-6">Send a Message</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Full Name (required)
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                className="bg-gray-50 border-gray-200"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail Address (required)
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="bg-gray-50 border-gray-200"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone/WhatsApp Number (optional)
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company/Organization (optional)
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                Location (required)
              </Label>
              <Select
                value={formData.location}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, location: value }))}
              >
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
            </div>

            {/* Service Area */}
            <div className="space-y-2">
              <Label htmlFor="serviceArea" className="text-sm font-medium text-gray-700">
                Service area of Interest (required)
              </Label>
              <Select
                value={formData.serviceArea}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceArea: value }))}
              >
                <SelectTrigger className="bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Select service area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="international-payments">International Payments</SelectItem>
                  <SelectItem value="currency-exchange">Currency Exchange</SelectItem>
                  <SelectItem value="business-solutions">Business Solutions</SelectItem>
                  <SelectItem value="personal-banking">Personal Banking</SelectItem>
                  <SelectItem value="api-integration">API Integration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message (required)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Please share the details about the service you're looking for..."
              className="bg-gray-50 border-gray-200 min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Contact Preferences */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">How would you like us to contact you?</Label>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="phone-contact"
                  checked={formData.contactPreferences.phone}
                  onCheckedChange={(checked) => handleContactPreferenceChange("phone", checked as boolean)}
                />
                <Label htmlFor="phone-contact" className="text-sm text-gray-600">
                  Phone
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="email-contact"
                  checked={formData.contactPreferences.email}
                  onCheckedChange={(checked) => handleContactPreferenceChange("email", checked as boolean)}
                />
                <Label htmlFor="email-contact" className="text-sm text-gray-600">
                  E-mail
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp-contact"
                  checked={formData.contactPreferences.whatsapp}
                  onCheckedChange={(checked) => handleContactPreferenceChange("whatsapp", checked as boolean)}
                />
                <Label htmlFor="whatsapp-contact" className="text-sm text-gray-600">
                  WhatsApp
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-base font-medium"
            >
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
