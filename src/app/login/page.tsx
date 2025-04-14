"use client";

const page = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted. API Key sent.");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center gap-5 p-5 h-screen bg-stone-50">
      {/* lhs */}
      <div className="w-1/2 h-full md:flex  items-end justify-end hidden rounded-3xl bg-primary overflow-hidden">
        <div className="w-96 h-96 rounded-full bg-black"></div>
      </div>
      {/* rhs */}
      <div className="md:w-1/2 w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center gap-5  ">
        <div className="w-full flex-1 bg-black rounded-3xl flex items-end justify-end">
          <div className="w-72 h-72 rounded-full bg-primary"></div>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 font-medium p-5">
          <div className="flex flex-col gap-1 w-full text-sm">
            <label>Email</label>
            <input
              required
              type="text"
              className="border border-black p-3 rounded-lg outline-none focus:border-primary transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex flex-col gap-1 w-full text-sm">
            <label>Password</label>
            <input
              required
              type="password"
              className="border border-black p-3 rounded-lg outline-none focus:border-primary transition-all duration-300 ease-in-out"
            />
          </div>
          <button type="submit" className="btn w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
