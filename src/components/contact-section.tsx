import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { FiSend } from "react-icons/fi";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import sendMessage from "../_utils/sendMessage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ContactSection() {

  const cRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "backout(1.7)",
      scrollTrigger: {
        trigger: cRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      }
    })
  })

  useGSAP(() => {
    gsap.from("#form", {
      top: 200,
      opacity: 0.4,
      duration: 2,
      transformOrigin: "top center",
      ease: "easeinout",
      scrollTrigger: {
        trigger: "#form",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    })
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const res = sendMessage(e.target[0].value, e.target[1].value, e.target[3].value, e.target[2].value)
    if (res) {
      console.log(res);
      alert("Thank you for your message! I'll get back to you soon.");
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
    } else {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <section id="contact" className="mb-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={cRef} className="text-center mb-12">
            <h2 className="mb-4 text-xl sm:text-2xl lg:text-3xl">Get In Touch</h2>
            <p className="text-sm md:text-md text-slate-600">
              Let's discuss your next mechanical design project
            </p>
          </div>


          <Card className="relative" id="form">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full group">
                  Send Message
                  <FiSend className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
