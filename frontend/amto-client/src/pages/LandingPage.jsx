import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stronger United: The Voice of Matatu Owners
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-3xl">
              Since 2018, AMTO has united matatu owners across all 47 counties of
              Kenya, championing their interests at county and national level, and
              standing strong as a member of the Federation of Public Transport
              Sector (FPTS).
            </p>
            <Button asChild>
              <Link to="/register">Join Today</Link>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <img
              src="team.svg"
              alt="Matatu fleet"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              AMTO exists to give matatu owners a united voice. We engage with
              government, law enforcement, insurers, and the public on issues that
              uniquely affect our members and the industry.
            </p>
            <p className="text-lg text-gray-700">
              Membership spans both individuals and transport companies. Every
              member must declare their sacco or company, even if it is not
              affiliated with AMTO.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <img
              src="podium.svg"
              alt="AMTO members meeting"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Join AMTO?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <img
                src="advocate.svg"
                alt="Advocacy"
                className="w-full h-40 object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Advocacy & Representation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We champion members’ issues to county & national governments,
                  law enforcement, insurers, and the wider public.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <img
                src="network.svg"
                alt="Network"
                className="w-full h-40 object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Nationwide Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our reach covers all 47 counties, giving members influence and
                  solidarity wherever they operate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <img
                src="member.svg"
                alt="Membership structure"
                className="w-full h-40 object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Clear Membership Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yearly fees:{" "}
                  <Badge variant="secondary" className="mx-1">
                    Individuals Ksh 1,000
                  </Badge>
                  <Badge variant="secondary" className="mx-1">
                    Saccos/Companies Ksh 5,000
                  </Badge>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Membership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Membership Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <img
                src="individual.svg"
                alt="Individual member"
                className="w-full h-40 object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Individual Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Any matatu owner, or person connected to the sector, can join
                  AMTO. Annual fee:{" "}
                  <Badge className="mx-1">Ksh 1,000</Badge>. Sacco/company
                  affiliation must be declared.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <img
                src="company.svg"
                alt="Sacco membership"
                className="w-full h-40 object-contain rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Saccos & Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Transport companies and saccos may register as organisational
                  members. Annual fee:{" "}
                  <Badge className="mx-1">Ksh 5,000</Badge>. Vehicle count is
                  tracked for records but does not affect the fee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who can join AMTO?</AccordionTrigger>
              <AccordionContent>
                Any matatu owner, transport company, or person connected to the
                sector may apply for membership.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Does my sacco/company have to be affiliated?
              </AccordionTrigger>
              <AccordionContent>
                No, but you must declare your sacco/company affiliation for
                transparency and records.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I pay the membership fee?
              </AccordionTrigger>
              <AccordionContent>
                Fees are payable yearly via M-Pesa or other approved payment
                methods. You can update your payment status in the dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of a Stronger Future
          </h2>
          <p className="text-lg mb-6">
            Join AMTO today and unite with thousands of matatu owners and
            organisations shaping the future of transport in Kenya.
          </p>
          <Button asChild variant="secondary">
            <Link to="/register">Become a Member</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
