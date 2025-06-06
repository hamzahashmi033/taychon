import React from 'react';
import Link from 'next/link';
import { getPortfolioItems } from '@/data/portfolio';

function Portfolio() {
  const portfolioItems = getPortfolioItems();

  return (
    <section className="work-grid pt-60 pb-60">
      <div className="container">
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div key={item.id} 
                 className={`col-lg-${index === 2 || index === 5 ? '8 offset-lg-2' : '5'}${index === 1 || index === 4 ? ' offset-lg-1' : ''}`}>
              <div className={`item mb-80 mt-40`}>
                <div className="img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cont d-flex align-items-end mt-30">
                  <div>
                    <span className="p-color mb-5 sub-title">{item.category}</span>
                    <h6>{item.title}</h6>
                  </div>
                  <div className="ml-auto">
                    <Link href={`/case-study/${item.id}`}>
                      <span className="ti-arrow-top-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
