"use client";
import React, { useEffect, useState } from "react";
import initIsotope from "@/common/initIsotope";
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItems, iconMap } from '@/data/portfolio';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('*');
  const projects = getPortfolioItems();

  useEffect(() => {
    initIsotope();
  }, []);

  const categories = [...new Set(projects.map(project => project.category))];

  const handleFilterClick = (category) => {
    setActiveCategory(category);
    
    const iso = window.Isotope.data('.grid');
    if (iso) {
      if (category === '*') {
        iso.arrange({ filter: '*' });
      } else {
        iso.arrange({ filter: `.${category}` });
      }
    }
  };

  const filteredProjects = activeCategory === '*' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={20} /> : null;
  };

  return (
    <>
      <style jsx global>{`
        .bg-black-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }
        .glass-card {
          background: rgba(25,25,25,0.7);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .website-bg {
          background: #121212;
        }
        .cta-btn {
          background: transparent;
          color: white;
          border: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0;
          font-size: 0.875rem;
          justify-content: flex-start;
          text-decoration: none;
        }
        .cta-btn:hover {
          background: transparent;
          opacity: 0.8;
        }
        .min-sec-h {
          min-height: 600px;
        }
        .filter-menu {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .filter-btn {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-btn:hover,
        .filter-btn.active {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }
      `}</style>

      <div className="bg-black-gradient min-vh-100 text-white">
        <div className="container py-5">
          {/* <div className="filter-menu">
            <button 
              className={`filter-btn ${activeCategory === '*' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('*')}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleFilterClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div> */}

          <div className="grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={`grid-item ${project.category} row align-items-center justify-content-between min-sec-h`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="col-lg-6 text-center mb-5 mb-lg-0">
                      <div className="position-relative mx-auto" style={{ maxWidth: '600px' }}>
                        <Image
                          src={project.image}
                          alt={`${project.name} Website`}
                          className="img-fluid rounded-4"
                          width={600}
                          height={600}
                          priority
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 className="display-1 fw-bold mb-4 lh-1">
                          {project.name}
                        </h1>

                        <p className="lead mb-5 lh-base opacity-90">
                          {project.description}
                        </p>

                        <div className="row row-cols-2 row-cols-sm-4 g-4 mt-4">
                          {project.features.map((feature, index) => (
                            <div key={index} className="col">
                              <div className="glass-card rounded-3 p-3 text-center h-100">
                                <div className="text-primary mb-2">
                                  {renderIcon(feature.icon)}
                                </div>
                                <h6 className="fw-bold mb-2 text-white small">
                                  {feature.title}
                                </h6>
                                <p className="text-white-50 mb-0 small">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="margin-top-cta mt-4">
                          <Link href={`/case-study/${project.id}`} className="cta-btn">
                            View Case Study
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6">
                      <div className="mx-auto" style={{ maxWidth: '600px' }}>
                        <h1 className="display-1 fw-bold mb-4 lh-1">
                          {project.name}
                        </h1>

                        <p className="lead mb-5 lh-base opacity-90">
                          {project.description}
                        </p>

                        <div className="row row-cols-2 row-cols-sm-4 g-4 mt-4">
                          {project.features.map((feature, index) => (
                            <div key={index} className="col">
                              <div className="glass-card rounded-3 p-3 text-center h-100">
                                <div className="text-primary mb-2">
                                  {renderIcon(feature.icon)}
                                </div>
                                <h6 className="fw-bold mb-2 text-white small">
                                  {feature.title}
                                </h6>
                                <p className="text-white-50 mb-0 small">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="margin-top-cta mt-4">
                          <Link href={`/case-study/${project.id}`} className="cta-btn">
                            View Case Study
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 text-center mb-5 mb-lg-0">
                      <div className="position-relative mx-auto" style={{ maxWidth: '600px' }}>
                        <Image
                          src={project.image}
                          alt={`${project.name} Website`}
                          className="img-fluid rounded-4"
                          width={600}
                          height={600}
                          priority
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;