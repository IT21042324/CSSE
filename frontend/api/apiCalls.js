import axios from "axios";
import { UseUserContext } from "../useHooks/user";
const BACKENDURL = "https://csse-bcfq.onrender.com";

export const MakeApiCall = () => {
  const { user } = UseUserContext();

  return {
    getDistance: async (origins, destinations) => {
      const response = await fetch(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(
          origins
        )}&destinations=${encodeURIComponent(
          destinations
        )}&mode=transit&transit_mode=bus&key=81qkL24E8Xvx7CN1KV54Ps0Rue7Oi`
      );
      const data = await response.json();

      const result = {
        destination_addresses: data.destination_addresses[0],
        origin_addresses: data.origin_addresses[0],
        distance: data.rows[0].elements[0].distance?.text,
        duration: data.rows[0].elements[0].duration?.text,
        status: data.rows[0].elements[0].status,
      };

      return result;
    },
    purchaseCredits: async (insertionData) => {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/purchase/`,
          insertionData
        );

        return info.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    signup: async function (insertionData) {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/user/signup`,
          insertionData
        );
        return info.data;
      } catch (err) {
        console.log(err);
      }
    },
    login: async function (insertionData) {
      try {
        const info = await axios.post(
          `${BACKENDURL}/api/user/login`,
          insertionData
        );
        return info.data;
      } catch (err) {
        console.log(err);
      }
    },
    findInqsByInspectorId: async function () {
      try {
        const { data } = await axios.get(
          `${BACKENDURL}/api/inquiry/inspector/${user._id}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    makeInquiry: async (insertionData) => {
      try {
        const { data } = await axios.post(
          `${BACKENDURL}/api/inquiry`,
          insertionData
        );

        console.log(data);

        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    findAllInqueries: async () => {
      try {
        const { data } = await axios.get(`${BACKENDURL}/api/inquiry`);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    patchInqueryById: async (inqId) => {
      try {
        const { data } = await axios.patch(
          `${BACKENDURL}/api/inquiry/update/${inqId}`
        );
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    deleteInquiryById: async (inqId) => {
      try {
        const { data } = await axios.delete(
          `${BACKENDURL}/api/inquiry/delete/${inqId}`
        );
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    findInqeryById: async (inqId) => {
      try {
        const { data } = await axios.get(`${BACKENDURL}/api/inquiry/${inqId}`);
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  };
};
