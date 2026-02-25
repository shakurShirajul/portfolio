import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import data from "../../lib/data.json";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

export default function PublicProfile() {
    const { socials } = data;

    return (
        <Card className="w-full">
            <CardHeader className="">
                <CardTitle className="text-base sm:text-lg playfair-display md:text-xl">Public Profile</CardTitle>
                <Separator className="my-1 sm:my-2" />
                <CardDescription className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
                    {socials.map((social) => (
                        <Tooltip key={social.name}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    className="transition-transform hover:scale-110 active:scale-95"
                                >
                                    <Image
                                        src={social.logo}
                                        width={40}
                                        height={40}
                                        alt={social.name}
                                        loading="lazy"
                                        sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 40px"
                                        quality={80}
                                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                                    />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="merriweather">{social.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}