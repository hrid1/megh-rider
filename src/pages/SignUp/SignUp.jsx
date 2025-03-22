import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import districtList from "../../constants/districtList";
import districtAreas from "../../constants/districtAres";
import bankOptions from "../../constants/bankOptions";

const SignUp = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    merchantName: "",
    fullAddress: "",
    businessAddress: "",
    district: "",
    area: "",
    contactNumber: "",
    facebookPage: "",
    website: "",
    accountName: "",
    accountNumber: "",
    branchName: "",
    bankName: "",
    bkash: "",
    nagad: "",
    rocket: "",
    nid: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [areas, setAreas] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // When district changes, update the areas dropdown
    if (name === "district") {
      setAreas(districtAreas[value] || []); // Get areas based on district or empty if not found
      setFormData((prev) => ({ ...prev, area: "" })); // Reset area selection
    }
  };
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg my02">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Merchant Registration Form
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="" htmlFor="">
              Company Name:
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="" htmlFor="">
              Merchant Name:
            </label>
            <input
              type="text"
              name="merchantName"
              placeholder="Merchant Name"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="" htmlFor="">
              Full Address:
            </label>
            <input
              type="text"
              name="fullAddress"
              placeholder="Full Address"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="" htmlFor="">
              Bussiness Address:
            </label>
            <input
              type="text"
              name="businessAddress"
              placeholder="Business Address"
              className="w-full p-2 border rounded mt-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-10">
          <select
            name="district"
            className="p-2 border rounded"
            onChange={handleChange}
          >
            <option>Select District</option>
            {districtList.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>

          <select
            name="area"
            className="p-2 border rounded"
            value={formData.area}
            onChange={handleChange}
          >
            <option>Select Area</option>
            {areas.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <div>
          <input
            type="url"
            name="facebookPage"
            placeholder="Facebook Business Page URL"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        <input
          type="url"
          name="website"
          placeholder="Website URL"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <label className="font-semibold text-xl mb-2 block" htmlFor="">
          Bank Details
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="accountName"
            placeholder="Account Name"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="branchName"
            placeholder="Branch Name"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <select
            name="bankName"
            className="p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Bank</option>
            {bankOptions.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="text"
            name="bkash"
            placeholder="Bkash Number"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="nagad"
            placeholder="Nagad Number"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="rocket"
            placeholder="Rocket Number"
            className="p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="nid"
          placeholder="NID Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <label htmlFor="nidUpload">File Upload</label>
        <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed rounded-lg cursor-pointer hover:border-teal-500 transition">
          <FaCloudUploadAlt className="w-8 h-8 text-gray-500" />
          <p className="text-gray-600 text-sm">Upload File</p>
          <input type="file" name="nidUpload" className="hidden" />
        </label>
        <input
          type="file"
          name="tradeLicense"
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          name="tinCertificate"
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
