import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import data from "../../lib/data.json";
import Link from "next/link";
import Image from "next/image";
interface Work {
    logo: string;
    company: string;
    role: string;
    link: string;
    start: string;
    end: string;
}

interface Education {
    logo: string;
    institution: string;
    degree: string;
    start: string;
    end: string;
    link: string;
}

export default function Experience() {
    const { work, education } = data;

    return (
        <Card>
            <CardHeader className="">
                <div className="space-y-3">
                    <CardTitle className="text-base sm:text-lg md:text-xl playfair-display">Experience</CardTitle>
                    <Separator className="my-2" />
                    <div className="space-y-3 merriweather">
                        {work.map((item: Work, index: number) => (
                            <div key={index} className="flex gap-2 sm:gap-3 items-center">
                                <Link href={item.link} target="_blank" className="shrink-0">
                                    <Image
                                        src={item.logo}
                                        alt={item.company}
                                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-border"
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        sizes="(max-width: 640px) 40px, (max-width: 768px) 44px, 48px"
                                        quality={85}
                                    />
                                </Link>
                                <div className="min-w-0 flex-1">
                                    <Link
                                        href={item.link}
                                        className="font-semibold text-sm sm:text-base hover:underline line-clamp-1"
                                        target="_blank"
                                    >
                                        {item.company}
                                    </Link>
                                    <p className="text-xs sm:text-sm font-medium text-muted-foreground line-clamp-1">
                                        {item.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.start} - {item.end}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-3 pt-2">
                    <CardTitle className="text-base sm:text-lg md:text-xl playfair-display">Education</CardTitle>
                    <Separator className="my-2" />
                    <div className="space-y-3 merriweather">
                        {education.map((item: Education, index: number) => (
                            <div key={index} className="flex gap-2 sm:gap-3 items-center">
                                <Link href={item.link} target="_blank" className="shrink-0">
                                    <Image
                                        src={item.logo}
                                        alt={item.institution}
                                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-border"
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        sizes="(max-width: 640px) 40px, (max-width: 768px) 44px, 48px"
                                        quality={85}
                                    />
                                </Link>
                                <div className="min-w-0 flex-1">
                                    <Link
                                        href={item.link}
                                        className="font-semibold text-sm sm:text-base hover:underline line-clamp-1"
                                        target="_blank"
                                    >
                                        {item.institution}
                                    </Link>
                                    <p className="text-xs sm:text-sm font-medium text-muted-foreground line-clamp-1">
                                        {item.degree}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.start} - {item.end}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
}