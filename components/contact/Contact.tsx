import { useEffect } from "react";



const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
          <section>

    
            <article className="w-screen flex justify-center">
              <form className="sm:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
                <h1 className="text-2xl font-semibold">Contact me to know more</h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-2 border-gray-500 rounded p-1 shadow-lg mt-5"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-2 border-gray-500 rounded p-1 shadow-lg mt-5"
                />
                <textarea
                  placeholder="Query"
                  className="w-full border-2 border-gray-500 rounded p-1 shadow-lg mt-5"
                />
                <button 
                    className="bg-blue-500 rounded text-white px-5 py-1 mt-3"
                    onClick={() => {
                      alert(JSON.stringify('Success! message sent successfully'));
                    }}
                  >
                  SUBMIT
                </button>
              </form>
            </article>
          </section>
  )
}

export default Contact;

