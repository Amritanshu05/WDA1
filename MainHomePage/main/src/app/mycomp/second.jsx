import React from "react";
import Image from "next/image";
const Second = () => {
  return (
    <div>
      <div className="w-screen h-auto  bg-amber-50 ">
        <div
          id="equi"
          className="text-amber-50 font-bold text-xl flex justify-center pb-10 "
        >
          EQUINOX
        </div>
        <div className="text-black font-bold text-xl flex justify-center">
          EQUINOX
        </div>
        <br />
        <a href="#" className="-mt-4 flex justify-center  ">
          View all
        </a>

        <div className="w-screen h-auto  bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 mt-5  pr-5 sm:pr-10 lg:pr-20 pl-5  sm:pl-10 lg:pl-20  ">
          <div className="card card-compact    h-96 glass ">
            <figure className="pt-4">
              <Image
                src="/equi_tshirt.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">Equinox Tshirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact  h-96 glass">
            <figure>
              <Image src="/equi_cap.png" alt="Equinox Tshirt"
          width={200} // Set the width of the image
          height={240} // Set the height of the image
          className="h-42" />
            </figure>
            <div className="card-body">
              <h2 className="card-title pt-11   ">Equinox Cap</h2>
              <p>Rs. 100</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact  h-96 glass">
            <figure className="pt-12">
              <Image
                src="/Mug.jpeg"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title  ">Equinox Mug</h2>
              <p>Rs. 200</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact  h-96 glass">
            <figure>
              <Image
                src="/equi_sweatshirt.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title ">Equinox Sweatshirt</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" w-screen h-screen  bg-amber-50">
        <div className="card w-screen  shadow-xl image-full">
          <figure>
            <Image
              src="./Alumni.webp"
              alt="Shoes"
              // className="py-12"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="w-auto h-auto bg-amber-50">
  <div className="card">
    <figure >
      <Image
        src="./Alumni.webp"
        alt=""
        className="w-screen h-auto py-12"
      />
    </figure>
  </div>
</div> */}
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className=" w-11/12 bg-amber-50 grid grid-cols-1  sm:pt-16">
          <div class="alumni section">
            <div class="alumni_bg">
              <div class="alumni_data">
                <h2 class="alumni_title"></h2>
                <p className="mb-32 tracking-tighter  "></p>

                <a href="#EQUINOX" class="button"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-center pt-5">
          <h2 className="text-4xl font-bold tracking-widest">OUR GRATITUDE</h2>
          <p className="text-2xl pt-3 font-semibold tracking-widest  ">
            SPECIAL OFFER FOR OUR ALUMNI
            <a href="#equi" className=" pl-6 sm:pl-4">
              <button className="btn btn-primary  ">ORDER NOW</button>
            </a>
          </p>
        </div>
      </div>

      {/* <div class="alumni_data">
            
             
            </div> */}

      <div className="w-screen h-auto  bg-amber-50 ">
        <div
          id="ens"
          className="text-amber-50 font-bold text-xl flex justify-center "
        >
          ENSPIRE
        </div>
        <div className="text-black font-bold text-xl flex justify-center pt-10">
          ENSPIRE
        </div>
        <br />
        <a href="#" className="-mt-4 flex justify-center">
          View all
        </a>

        <div className="w-screen h-auto  bg-amber-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10 mt-5  pr-5 sm:pr-10 lg:pr-20 pl-5  sm:pl-10 lg:pl-20 ">
          <div className="card card-compact    h-96 glass ">
            <figure>
              <Image
                src="/enspire_hoddie_01.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title ">Enspire Hoddie</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact    h-96 glass ">
            <figure>
              <Image
                src="/enspire_tshirt_01.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  "> Enspire T-shirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact    h-96 glass ">
            <figure>
              <Image
                src="/enspire_tshirt_02.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title  ">Enspire T-shirt</h2>
              <p>Rs. 500</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card card-compact    h-96 glass ">
            <figure>
              <Image
                src="/enspire_hoodie_02.png"
                alt="Equinox Tshirt"
                width={200} // Set the width of the image
                height={240} // Set the height of the image
                className="h-60"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title ">Enspire Hoddie</h2>
              <p>Rs. 700</p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-auto bg-amber-50 pt-8">
        <div className="text-xl text-amber-50 font-bold font-sans flex justify-center">
          <h1 id="sug">SUGGESTION BOX</h1>
        </div>
        <div className="text-xl font-bold font-sans flex justify-center pt-10">
          <h1 id="sug">SUGGESTION BOX</h1>
        </div>
        <div className="text-sm flex justify-center pt-2">
          Empower change with your ideas. Drop them here!
        </div>
        <div className="pb-20 pt-5 flex justify-center ">
          <input
            type="text"
            placeholder="Enter your text..."
            className="w-52 sm:w-1/3 md:1/4 lg:w-1/4 xl:w-1/5 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
          <div className="pl-4">
            <button className="btn btn-error w-28  ">Send</button>
          </div>
        </div>
      </div>

      <div className="w-screen h-auto grid grid-cols-2 sm:grid-cols-4 bg-amber-50 pb-20">
        <div className="w-1/10 h-auto flex justify-center items-center pb-5">
          <Image
            src="/IIITL_logo.png"
            alt=""
            width={96}
            height={96}
            className="w-24"
          />
        </div>
        <div className="w-1/10 h-auto flex justify-center items-center pb-5">
          <Image
            src="/equinox_logo.png"
            alt=""
            width={96}
            height={96}
            className="w-24"
          />
        </div>
        <div className="w-1/10 h-auto flex justify-center items-center pb-5">
          <Image
            src="/Logo-Cultural-Club.jpeg.webp"
            alt=""
            width={96}
            height={96}
            className="w-24"
          />
        </div>
        <div className="w-1/10 h-auto flex justify-center items-center pb-5">
          <Image
            src="/Enspire2.webp"
            alt=""
            width={96}
            height={96}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
