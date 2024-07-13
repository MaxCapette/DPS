

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import { CardContent, Card } from "@/components/ui/card"
import ContactPage from "../contact/contact"
import Image from "next/image"
import { BriefcaseIcon, FerrisWheelIcon, SofaIcon, UsersIcon } from "lucide-react"

export function Mainpage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-white  px-4 md:px-6 h-14 flex justify-between shadow ">
        <Link className="flex items-center justify-center" href="#">
          <ShieldCheckIcon className="h-6 w-6 mx-1" />
          <span>DIVINE PAY SYSTEMS</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 "
            href="#"
          >
            Acceuil
          </Link>
         
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 "
            href="#about"
          >
            À propos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 "
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
              <SheetClose asChild>
                <Link className="flex w-full items-center py-2 text-lg font-semibold " href="#">
                  Acceuil
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="flex w-full items-center py-2 text-lg font-semibold " href="#about">
                À propos
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="flex w-full items-center py-2 text-lg font-semibold " href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center ">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100  flex flex-col items-center justify-center topo">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <Image
                alt="Hero Image"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/kyc.jpeg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                  Optimisez votre processus KYC
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl ">
                  Notre application KYC offre un moyen sécurisé et efficace d&apos;intégrer de nouveaux clients, en veillant au respect des exigences réglementaires.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50   "
                    href="#contact"
                  >
                    Contactez nous
                  </Link>             
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <FingerprintIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Vérification d&apos;identité</h3>
                  <p className="text-center text-gray-500 ">
                  Vérifiez en toute sécurité l&apos;identité de vos clients grâce à nos outils de vérification d&apos;identité avancés.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <FileIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Conformité des documents</h3>
                  <p className="text-center text-gray-500 ">
                  Assurez-vous que les documents de vos clients répondent aux exigences réglementaires grâce à nos vérifications approfondies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <RatioIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Évaluation des risques</h3>
                  <p className="text-center text-gray-500 ">
                  Évaluez et atténuez les risques potentiels grâce à nos outils d&apos;analyse des risques avancés, adaptés à vos besoins.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  src="/globe.jpeg"
                  width={600}
                  height={400}
                  alt="Solutions KYC"
                  className="mx-auto rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl ">
                  Approuvé par des entreprises du monde entier
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Nos solutions KYC ont aidé des entreprises de toutes tailles à simplifier leurs processus de
                  vérification des clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 shadow-sm ">
                    <BriefcaseIcon className="h-8 w-8 text-gray-900 " />
                    <h3 className="text-xl font-bold text-gray-900 ">Entreprises</h3>
                    <p className="text-gray-500 ">
                      Solutions sur mesure pour les grandes entreprises.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm ">
                    <SofaIcon className="h-8 w-8 text-gray-900 " />
                    <h3 className="text-xl font-bold text-gray-900 ">PME</h3>
                    <p className="text-gray-500 ">
                      Solutions évolutives pour les petites et moyennes entreprises.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm ">
                    <FerrisWheelIcon className="h-8 w-8 text-gray-900 " />
                    <h3 className="text-xl font-bold text-gray-900 ">Startups</h3>
                    <p className="text-gray-500 ">
                      Solutions flexibles pour les entreprises en croissance.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm ">
                    <UsersIcon className="h-8 w-8 text-gray-900 " />
                    <h3 className="text-xl font-bold text-gray-900 ">Particuliers</h3>
                    <p className="text-gray-500 ">
                      Vérification d&apos;identité sécurisée pour un usage personnel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center" id="about">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
              Pourquoi choisir DIVINE PAY SYSTEMS ?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
              Découvrez les principales raisons pour lesquelles notre application KYC est le choix privilégié des entreprises souhaitant optimiser leurs processus d&apos;intégration et de conformité.
              </p>
            </div>
            <div className="grid gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <UserCheckIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Solution de confiance</h3>
                  <p className="text-center text-gray-500 ">
                  DIVINE PAY SYSTEMS a été approuvée par des entreprises de divers secteurs pour assurer la conformité et atténuer les risques.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <GaugeIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Intégration efficace</h3>
                  <p className="text-center text-gray-500 ">
                  Notre processus d&apos;intégration simplifié vous aide à intégrer rapidement et en toute sécurité de nouveaux clients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <ShieldCheckIcon className="h-12 w-12 text-gray-900 " />
                  <h3 className="text-xl font-bold ">Conformité réglementaire</h3>
                  <p className="text-center text-gray-500 ">
                  Restez à jour avec les changements réglementaires grâce à nos fonctionnalités de conformité complètes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32   flex flex-col items-center justify-center container" id="contact">
          <ContactPage />
        </section>
      </main>
      <footer className="bg-gray-100 text-gray-900 py-8  ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="text-gray-600 mt-4 md:mt-0">© 2022 DIVINE PAY SYSTEMS.</p>
          <p className="text-gray-600 md:mt-0"> Tous droits réservés.</p>
          <p className="text-gray-600 mt-4 md:mt-0">3 AVENUE JEANNE GARNERIN</p>
          <p className="text-gray-600  md:mt-0">91320 WISSOUS</p>
          <p className="text-gray-600 mt-4 md:mt-0">contact@divine-pay-systems.fr</p>
          <p className="text-gray-600 mt-4 md:mt-0">TEL: 01 85 10 03 72</p>
        </div>
      </footer>
    </div>
  )
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function FingerprintIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  )
}


function GaugeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function RatioIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function UserCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  )
}
