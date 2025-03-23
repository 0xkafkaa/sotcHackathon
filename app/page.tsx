import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Award, Gift, Users, FileCheck, Code, Lightbulb } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                SOTC Hackathon 2025
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A week-long FOSS-based hackathon to build impactful solutions, explore open-source technologies, and
                contribute to the community.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" asChild>
                <Link href="#register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>1 Week Duration</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dept of Computer Science, Pondicherry University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-16 bg-background" id="why-participate">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Participate?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px]">
              Join us for an exciting week of innovation, learning, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Exciting Prize Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Win amazing rewards for your creativity!</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Gift className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Exclusive Swag</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Stickers, goodies, and more!</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expand Your Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Meet like-minded tech enthusiasts and industry experts.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <FileCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get recognized for your efforts with a participation certificate.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themes & Challenges */}
      <section className="py-16 bg-muted/50" id="themes">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Themes & Challenges</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px]">
              Build solutions that align with FOSS (Free and Open-Source Software) principles. The hackathon will focus
              on themes that empower communities, improve accessibility, and promote digital freedom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Community Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create solutions that strengthen communities and enable collaboration through open-source
                  technologies.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Develop tools and applications that make technology more accessible to everyone, regardless of
                  ability.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Digital Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Build solutions that promote privacy, security, and freedom in the digital world through open-source
                  principles.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-16 bg-background" id="goal">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Goal of SOTC Hackathon</h2>
              <p className="text-muted-foreground mb-4">
                The SOTC Hackathon is designed for absolute beginners who want to explore, learn, and build using Free
                and Open-Source Software (FOSS). Our goal is to introduce juniors to real-world problem-solving,
                collaborative coding, and the power of open-source contributions.
              </p>
              <p className="text-muted-foreground mb-4">Through this week-long hackathon, we aim to:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Help students practically apply their programming skills.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Encourage the use of free software tools for development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Promote team collaboration and problem-solving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Make learning fun, engaging, and rewarding.</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Event Duration</p>
                    <p className="text-muted-foreground">1 Week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Dept of Computer Science, Pondicherry University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Registration Status</p>
                    <p className="text-muted-foreground">Open Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SOTC */}
      <section className="py-16 bg-muted/50" id="about">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who We Are</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px]">
              SOTC is a Tech Community that strengthens the Free and Open Source Software ecosystem in Pondicherry
              University.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>About SOTC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We are a group of people who like to discuss, develop and provide guidance on free software.
                </p>
                <p>
                  SOTC was started at 2018 in Pondicherry University with help of our Free Software Enthusiasts from
                  FSHM.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We discuss about tech with free software through workshops, weekly sessions and some activities like
                  Study Circle.
                </p>
                <p>We empower individuals to explore FOSS, develop new skills, and make a meaningful impact.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-primary/10" id="register">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Join?</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mb-6">
              Don't miss this opportunity to learn, build, and grow with FOSS!
            </p>
            <Button size="lg" className="text-lg px-8">
              Register Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Registration is open for all students of Pondicherry University.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

