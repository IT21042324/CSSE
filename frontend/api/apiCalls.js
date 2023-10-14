import axios from "axios";

export const MakeApiCall = () => {
  const BACKENDURL = "https://csse-bcfq.onrender.com";

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
      console.log(insertionData);

      try {
        const { data } = await axios.post(
          `${BACKENDURL}/api/purchase/`,
          insertionData
        );

        return data;
      } catch (err) {
        console.error(err);
        return err;
      }
    },
  };
};
