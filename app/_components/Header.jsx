'use client';
import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Box, Card, CardBody, CardFooter, Heading, Stack, Text } from "@chakra-ui/react";
import { LoginButton } from "@telegram-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";
/** @type {import('@/app/api/auth/[...nextauth]/route').User} */
/** @type {import('react').FC<{ botUsername: string; onAuthCallback: (data: any) => void }>} */

function LoadingPlaceholder() {
    return (
        <Box padding="6" boxShadow="lg" bg="white">

        </Box>
    );
}

function Header() {
    const botUsername = process.env.BOT_USERNAME;

    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <LoadingPlaceholder />;
    }

    const user = session?.user;

    if (status === 'authenticated') {
        return (
            <div>
                <div className="flex items-center justify-between p-5 shadow-md">
                    <Image src="/logo.svg" width={100} height={100} alt="logo" className="w-[150px] md:w-[200px] "/>
                    <ul className="hidden md:flex gap-14 font-medium text-lg">
                        <li className="hover:text-primary transition-all duration-300 cursor-pointer">Product</li>
                        <li className="hover:text-primary transition-all duration-300 cursor-pointer">Pricing</li>
                        <li className="hover:text-primary transition-all duration-300 cursor-pointer">Contact Us</li>
                        <li className="hover:text-primary transition-all duration-300 cursor-pointer">About Us</li>
                    </ul>
                    <div className="flex gap-5">
                        <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
                            {user?.image ? (
                                <Image objectFit="contain" maxW={{ base: '100%', sm: '200px' }} src={user?.image} alt="" />
                            ) : null}
                            <Stack>
                                <CardBody>
                                    <Heading size="md">Hello</Heading>
                                    <Text as="i">You are signed in as</Text>&nbsp;
                                    <Text as="b">{user.name}</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        variant="solid"
                                        colorScheme="blue"
                                        as="a"
                                        onClick={() => {
                                            signOut();
                                        }}
                                    >
                                        {'Sign out'}
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="flex items-center justify-between p-5 shadow-md">
                <Image src="/logo.svg" width={100} height={100} alt="logo" className="w-[150px] md:w-[200px] "/>
                <ul className="hidden md:flex gap-14 font-medium text-lg">
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Product</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Pricing</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">Contact Us</li>
                    <li className="hover:text-primary transition-all duration-300 cursor-pointer">About Us</li>
                </ul>
                <div className="flex gap-5">
                    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
                    <LoginButton
                        botUsername={botUsername}
                        onAuthCallback={(data) => {
                            signIn('telegram-login', {callbackUrl: '/'}, data);
                        }}
                    />
                    </Card>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Header