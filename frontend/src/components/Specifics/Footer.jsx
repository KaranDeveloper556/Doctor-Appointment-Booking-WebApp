const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-start justify-between mb-8 md:flex-row">
          {/* Logo and Description */}
          <div className="mb-6 md:w-1/3 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  {/* Replace with actual logo SVG path */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5zm6 4h-2v-2h2v2zm0-4h-2V7h2v5z" />
                </svg>
              </div>
              <h2 className="ml-2 text-xl font-bold text-blue-600">Prescripto</h2>
            </div>
            <p className="text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="mb-6 md:w-1/3 md:mb-0">
            <h3 className="mb-4 text-lg font-bold">COMPANY</h3>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3">
            <h3 className="mb-4 text-lg font-bold">GET IN TOUCH</h3>
            <p className="text-gray-600">+0-000-000-000</p>
            <p className="text-gray-600">greatstackdev@gmail.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-sm text-center text-gray-500 border-t">
          Copyright 2024 @ Greatstack.dev - All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
