'use client';
import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Box, Card, CardBody, CardFooter, Heading, SkeletonText, Stack, Text } from "@chakra-ui/react";
import { LoginButton } from "@telegram-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
import type { User } from "@/app/api/auth/[...nextauth]/route";

function LoadingPlaceholder() {
    return (
        <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
    );
}

function Header() {
    return (
        <div>
            <div className="flex items-center justify-between p-5 shadow-md">
                <Image src="/logo.svg" width={100} height={100} alt="logo" className="w-[150px] md:w-[200px] " />
                <ul className="hidden md:flex gap-14 font-medium text-lg">
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Product</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Pricing</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Contact Us</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">About Us</li>
                </ul>
                <div className="flex gap-5">
                    <Button variant="ghost">Login</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Header