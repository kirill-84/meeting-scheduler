import React from 'react'
import {Button} from "@/components/ui/button";

function Hero() {
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <div className="text-center max-w-2xl">
                <h2 className="font-bold text-[60px] text-slate-700">Easy scheduling ahead</h2>
                <h2 className="text-xl mt-5 text-slate-500"></h2>
                <div className="flex gap-4 flex-col mt-5">
                    <h3>Sign Up free with Telegram</h3>
                    <div className="flex justify-center gap-8">
                        <Button>Sign up with Telegram</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero