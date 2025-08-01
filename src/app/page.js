"use client";

import Image from "next/image";
import { motion } from "framer-motion";

//imported UI Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

//imported components
import HideNextToast from "./HideNextToast";
import { useState } from "react";

export default function Home() {

  const [gender , setGender]= useState("");
  const handleChange = (e) => {
    let name = e.target.id;
    console.log(name);
  };
  return (
    <>
      <HideNextToast />
      <div className="w-screen h-screen flex justify-center items-center relative">
        {/* Left section */}
        <section className="w-screen md:w-[35.5%] h-full bg-[#14A29A] flex flex-col items-center justify-center text-white">
          <div className="w-9/12 h-full my-10 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-5">
              <Image
                src="/White_logo.svg"
                alt="logo"
                width={60}
                height={60}
                className="scale-80 md:scale-100"
              />
              <h1 className="text-lg md:text-3xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
            </div>
            <p className="w-full text-center md:w-fit text-sm text-white">
              Having troubles? <u>Get Help</u>
            </p>
          </div>
        </section>

        {/* Right section */}
        <section className="w-screen md:w-[64.5%] h-full absolute md:relative bg-none md:bg-white flex flex-col justify-center items-center">
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-2/3 md:w-1/2 flex flex-col justify-center text-xs md:text-sm scale-120 md:scale-90 bg-white p-7 md:p-0 rounded-xl"
          >
            <h2 className="text-2xl px-2">Login</h2>

            <div className="relative px-2 mt-2 ">
              <div className="flex w-full justify-between gap-4">
                <span className="w-full">
                  <Label
                    htmlFor="email"
                    styles="form_input"
                    data="First Name"
                  />
                  <Input
                    id="First_Name"
                    type="email"
                    styles="text"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </span>
                <span className="w-full">
                  <Label htmlFor="email" styles="form_input" data="Last Name" />
                  <Input
                    id="Last_Name"
                    styles="text"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </span>
              </div>
              <Label htmlFor="email" styles="form_input" data="Email address" />
              <Input
                id="email"
                type="email"
                styles="text"
                placeholder="Enter your Email"
                onChange={handleChange}
              />

              <Label htmlFor="email" styles="form_input" data="Gender" />
              <RadioGroup
                defaultValue="option-one"
                onValueChange={(value) => setGender(value)}
                className="flex pt-3 justify-around space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="Male" />
                  <Label htmlFor="Male" data="Male" />
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="Female" />
                  <Label htmlFor="Female" data="Female" />
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="prefer not to say" id="prefer not to say" />
                  <Label htmlFor="prefer not to say" data="prefer not to say" />
                </div>
              </RadioGroup>

              <Label htmlFor="email" styles="form_input" data="Country" />
              <Select className="w-full bg-transparent  ">
                <SelectTrigger styles="form_select">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Male</SelectItem>
                  <SelectItem value="banana">Female</SelectItem>
                  <SelectItem value="Prefer_not_to_say">
                    Prefer not to Say
                  </SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="email" styles="form_input" data="Profile photo" />
              <Input
                id="profile"
                type="file"
                placeholder=" hello there"
                className="text-gray-400 flex justify-center items-center "
                onChange={handleChange}
              ></Input>
            </div>  

            <div className="flex justify-between w-full mt-5 px-2 h-10">
              <Button variant="ghost" className="text-gray-500 h-full">
                Forgot Password?
              </Button>
              <Button className="h-full bg-[#14A29A] text-white w-[40%] hover:bg-[#128f88]">
                Sign in
              </Button>
            </div>
          </motion.form>

          <p className="w-2/3 md:w-1/3 text-sm scale-90 absolute text-white/50 md:text-gray-500 bottom-14 md:bottom-10">
            Protected by reCAPTCHA and subject to the{" "}
            <span className="text-white md:text-[#14A29A]">
              ........ Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-white md:text-[#14A29A]">
              Terms of Service.
            </span>
          </p>
        </section>
      </div>
    </>
  );
}
