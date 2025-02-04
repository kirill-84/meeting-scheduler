import React from 'react'
import {Button} from "@/components/ui/button"
import Image from "next/image";

function Hero() {
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <div className="hidden lg:block">
                <Image src="/profile-user-1.svg" width="100" height="100" className="h-[100px] object-cover rounded-full absolute right-36" alt=""/>
                <Image src="/profile-user-3.svg" width="100" height="100" className="h-[100px] object-cover rounded-full absolute top-48 left-16" alt=""/>
                <Image src="/profile-user-2.svg" width="100" height="100" className="h-[100px] object-cover rounded-full absolute bottom-20 left-36" alt=""/>
                <Image src="/profile-user-4.svg" width="100" height="100" className="h-[100px] object-cover rounded-full absolute right-16 bottom-32" alt=""/>
            </div>
            <div className="text-center max-w-3xl">
                <h2 className="font-bold text-[60px] text-slate-700">Easy scheduling ahead</h2>
                <h2 className="text-xl mt-5 text-slate-500"></h2>
                <div className="flex gap-4 flex-col mt-5">
                    <h3 className="text-sm">Sign Up free with Telegram</h3>
                    <div className="flex justify-center gap-8">
                        <Button className="p-7 flex gap-4">Sign up with Telegram</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero