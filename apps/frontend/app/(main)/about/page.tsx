import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - DGcom Web Design Agency',
  description: 'Learn about DGcom Web Design Agency - our history, approach, and talented team.',
};

export default function About() {
  // Facts data
  const facts = [
    { icon: 'fa-certificate', title: 'Years Experience', count: 10 },
    { icon: 'fa-users-cog', title: 'Team Members', count: 25 },
    { icon: 'fa-users', title: 'Satisfied Clients', count: 350 },
    { icon: 'fa-check', title: 'Projects Done', count: 500 },
  ];

  // Skills data
  const skills = [
    { name: 'Digital Marketing', percentage: 85 },
    { name: 'SEO & Backlinks', percentage: 90 },
    { name: 'Design & Development', percentage: 95 },
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "SEO & Founder",
      image: "/images/team-1.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" }
    },
    {
      id: 2,
      name: "Jessica Brown",
      position: "Web Designer",
      image: "/images/team-2.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" }
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Developer",
      image: "/images/team-3.jpg",
      social: { facebook: "#", twitter: "#", instagram: "#" }
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated mb-3">About Us</h1>
          <nav aria-label="breadcrumb animated">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
              <li className="breadcrumb-item"><Link href="#" className="text-white">Pages</Link></li>
              <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Facts Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {facts.map((fact, index) => (
              <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                  <i className={`fa ${fact.icon} fa-4x text-primary mb-4`}></i>
                  <h5 className="mb-3">{fact.title}</h5>
                  <h1 className="display-5 mb-0" data-toggle="counter-up">{fact.count}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <Image 
                  src="/images/about.jpg"
                  alt="About DGcom Web Design"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                <p>We are a full-service digital agency specializing in custom web design, development, and digital marketing solutions that drive results for businesses of all sizes.</p>
                <p className="mb-4">Our team of experts combines creativity and technical expertise to deliver stunning websites and effective online strategies tailored to your unique business goals.</p>
                <div className="d-flex align-items-center mb-4 pb-2">
                  <Image 
                    className="flex-shrink-0 rounded-circle"
                    src="/images/team-1.jpg"
                    alt="John Doe"
                    width={50}
                    height={50}
                  />
                  <div className="ps-4">
                    <h6>John Doe</h6>
                    <small>SEO & Founder</small>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-primary rounded-pill py-3 px-5">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features/Why Choose Us Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">Why Choose Us</h6>
                <h1 className="display-6 mb-4">Why People Trust Us? Learn About Us!</h1>
                <p className="mb-4">We combine creative design with technical expertise to deliver websites that not only look amazing but also drive business results and provide measurable ROI.</p>
                <div className="row g-4">
                  {skills.map((skill, index) => (
                    <div className="col-12" key={index}>
                      <div className="skill">
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">{skill.name}</p>
                          <p className="mb-2">{skill.percentage}%</p>
                        </div>
                        <div className="progress" aria-label={`${skill.name} Skill Level`}>
                          <div 
                            className={`progress-bar bg-primary progress-bar-${skill.percentage}`}
                            role="progressbar" 
                            aria-valuetext={`${skill.percentage}%`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <Image 
                  src="/images/feature.jpg"
                  alt="Our Features"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title-container wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Team</h6>
            <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="team-item text-center p-4">
                  <Image 
                    className="img-fluid border rounded-circle w-75 p-2 mb-4"
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                  />
                  <div className="team-text">
                    <div className="team-title">
                      <h5>{member.name}</h5>
                      <span>{member.position}</span>
                    </div>
                    <div className="team-social">
                      <a className="btn btn-square btn-primary rounded-circle" href={member.social.facebook} aria-label={`${member.name}'s Facebook`}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary rounded-circle" href={member.social.twitter} aria-label={`${member.name}'s Twitter`}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary rounded-circle" href={member.social.instagram} aria-label={`${member.name}'s Instagram`}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
