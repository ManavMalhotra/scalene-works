"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

import accenture from "@/public/accenture.png";
import capegami from "@/public/capegami.png";
import genericElectric from "@/public/generalElectric.png";
import kpmg from "@/public/kpmg.png";
import casestudies from "@/public/casestudies.svg";
import resources from "@/public/resources.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import mission from "@/public/mission.svg";

import { Separator } from "@/components/ui/separator";
import cert from "@/public/certificate.svg";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";

import Main from "@/components/Home/Main";
import Talent from "@/components/Home/Talent";
import OurServices from "@/components/Home/OurServices";
import GlobalHiringIndex from "@/components/Home/GlobalHiringIndex";
import Industries from "@/components/Home/Industries";
import CaseStudies from "@/components/Home/CaseStudies";
export default function Home() {
    return (
        <div className="flex flex-col items-start justify-center mx-auto">
            <Main />
            <Talent />
            <OurServices />
            <GlobalHiringIndex />
            <Industries />
            <CaseStudies />
        </div>
    );
}
