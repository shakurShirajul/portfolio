import { LucideMail, LucideMapPin, LucidePhone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Kbd } from "../ui/kbd";
import { Separator } from "../ui/separator";

export default function PersonalDetails() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl">Personal Details</CardTitle>
                <Separator className="my-1 sm:my-2" />
                <CardDescription className="space-y-2 sm:space-y-3">
                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <Kbd className="shrink-0">
                            <LucideMapPin size={16}  />
                        </Kbd>
                        <span className="wrap-break-word">Lives in Bangladesh</span>
                    </p>
                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <Kbd className="shrink-0">
                            <LucideMail size={16}  />
                        </Kbd>
                        <a
                            href="mailto:siirajulisllam@gmail.com"
                            className="hover:underline break-all"
                        >
                            siirajulisllam@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <Kbd className="shrink-0">
                            <LucidePhone size={16}  />
                        </Kbd>
                        <span className="wrap-break-word">+8801747493837</span>
                    </p>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}