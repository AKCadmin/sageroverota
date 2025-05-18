"use client";
import { encrypt } from "@/utils/encryption";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
// import "react-masonry-css/dist/styles.css"; // optional basic styles
import slugify from "slugify";

const DestinationMasonry = ({ destinations = [] }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section className="destination-section destination-page">
      <div className="container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="row my-masonry-grid"
          columnClassName="col-masonry"
        >
          {destinations.map((item) => {
            const encrypted_id = encrypt(item.id);
            const slug = slugify(item.destination_name, { lower: true, strict: true });

            return (
              <div className="masonry-item" key={item.id}>
                <div className="desti-item overlay-desti-item fixed-card">
                  <figure className="desti-image">
                    <Image
                      src={item.primary_image || '/assets/images/placeholder.webp'}
                      alt={item.destination_name}
                      width={1000}
                      height={1000}
                      layout="responsive"
                      unoptimized={true}
                    />
                  </figure>
                  <div className="meta-cat bg-meta-cat">
                    <Link href={`/destination/${encrypted_id}/${slug}`}>{item.destination_name}</Link>
                  </div>
                  <div className="desti-content">
                    <h3>
                      <Link href={`/destination/${encrypted_id}/${slug}`}>{item.destination_name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </section>
  );
};

export default DestinationMasonry;
