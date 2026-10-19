"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const GREETINGS = [
  { hello: "Hello", name: "Rajarshi Chakraborty" }, // English
  { hello: "こんにちは", name: "ラジャルシ・チャクラボルティ" }, // Japanese
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "Hola", name: "Rajarshi Chakraborty" }, // Spanish
  { hello: "안녕하세요", name: "라자르시 차크라보르티" }, // Korean
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "नमस्ते", name: "राजर्षि चक्रवर्ती" }, // Hindi
  { hello: "Bonjour", name: "Rajarshi Chakraborty" }, // French
  { hello: "你好", name: "拉贾尔希·查克拉博蒂" }, // Chinese
  { hello: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ", name: "ਰਾਜਰਸ਼ੀ ਚੱਕਰਵਰਤੀ" }, // Punjabi
  { hello: "Привет", name: "Раджарши Чакраборти" }, // Russian
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "வணக்கம்", name: "ராஜர்ஷி சக்ரவர்த்தி" }, // Tamil
  { hello: "Ciao", name: "Rajarshi Chakraborty" }, // Italian
  { hello: "Γεια σας", name: "Ρατζάρσι Τσακραβόρτι" }, // Greek
  { hello: "నమస్కారం", name: "రాజర్షి చక్రవర్తి" }, // Telugu
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "Hallo", name: "Rajarshi Chakraborty" }, // German
  { hello: "سلام", name: "راجارشی چاکرابورتی" }, // Persian
  { hello: "નમસ્તે", name: "રાજર્ષિ ચક્રવર્તી" }, // Gujarati
  { hello: "Merhaba", name: "Rajarşi Çakraborti" }, // Turkish
  { hello: "നമസ്കാരം", name: "രാജർഷി ചക്രവർത്തി" }, // Malayalam
  { hello: "مرحباً", name: "راجارشي تشاكرابورتي" }, // Arabic
  { hello: "नमस्कार", name: "राजर्षी चक्रवर्ती" }, // Marathi
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "Hej", name: "Rajarshi Chakraborty" }, // Swedish
  { hello: "ଓଡ଼ିଆ ନମସ୍କାର", name: "ରାଜର୍ଷି ଚକ୍ରବର୍ତ୍ତୀ" }, // Odia
  { hello: "שלום", name: "רג'רשי צ'קרבורטי" }, // Hebrew
  { hello: "ನಮಸ್ಕಾರ", name: "ರಾಜರ್ಷಿ ಚಕ್ರವರ್ತಿ" }, // Kannada
  { hello: "Xin chào", name: "Ra-gia-si Cha-kra-bô-ti" }, // Vietnamese
  { hello: "ꯈꯨꯔꯨꯝꯖꯔꯤ", name: "ꯔꯥꯖꯔꯁꯤ ꯆꯛꯔꯕꯔ꯭ꯇꯤ" }, // Manipuri
  { hello: "Привіт", name: "Раджарші Чакраборті" }, // Ukrainian
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "नमस्कार", name: "राजर्षि चक्रवर्ती" }, // Nepali
  { hello: "สวัสดี", name: "ราชาร์ชี จักรบอร์ตี" }, // Thai
  { hello: "ꦱꦸꦒꦼꦁ", name: "ꦫꦗꦂꦯꦶ ꦕꦏꦿꦮꦂꦠꦶ" }, // Javanese
  { hello: "Olá", name: "Rajarshi Chakraborty" }, // Portuguese
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" }, // Bengali
  { hello: "မင်္ဂလာပါ", name: "ရာဇာရှီ ချက်ကရာဗိုတီ" }, // Burmese
  { hello: "Aloha", name: "Rajarshi Chakraborty" }, // Hawaiian
  { hello: "សួស្តី", name: "រ៉ាចារស៊ី ចាក្រាបរទី" }, // Khmer
  { hello: "নমস্কার", name: "রাজর্ষি চক্রবর্তী" } // Bengali
];

export default function MultilingualGreeting() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const current = GREETINGS[currentIndex] || GREETINGS[0];

  return (
    <div className="flex flex-col gap-0 w-full">
      {/* LINE 1: Greeting + Waving Emoji + Comma */}
      <div className="relative w-full h-8 sm:h-[40px] md:h-[46px] lg:h-[50px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`hello-line-${currentIndex}`}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-[-4px] sm:top-[-6px] md:top-[-8px] lg:top-[-10px] flex items-center gap-x-1.5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-normal select-none whitespace-nowrap"
          >
            <span
              className="inline-block bg-linear-to-r from-red-500 via-rose-500 to-violet-500 bg-clip-text text-transparent font-extrabold pr-2 sm:pr-3"
              style={{
                background:
                  "linear-gradient(90deg, #ef4444 0%, #d946ef 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {current.hello}
            </span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                repeatDelay: 1
              }}
              className="inline-block origin-bottom-right"
            >
              👋🏻
            </motion.span>
            <span className="text-foreground">,</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LINE 2: "My name is" */}
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-none select-none text-foreground py-0 mt-1 sm:mt-2 md:mt-2.5">
        My name is
      </div>

      {/* LINE 3: Name */}
      <div className="mt-1 sm:mt-2 md:mt-2.5 py-0">
        <div className="relative w-full h-7 sm:h-[32px] md:h-[36px] lg:h-[40px]">
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={`name-${currentIndex}`}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Rajarshi Chakraborty"
              className="absolute left-0 top-[-4px] sm:top-[-6px] md:top-[-8px] lg:top-[-10px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.7rem] font-bold tracking-tight bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-normal whitespace-nowrap pr-2 sm:pr-4"
            >
              {current.name}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
