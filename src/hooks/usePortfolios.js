import { useQuery } from "react-query";

const usePortfolios = () => {
  var wpUserName = process.env.REACT_APP_WP_USERNAME;
  var appPassword = process.env.REACT_APP_WP_APP_PASS;

  var auth = {
    Authorization: `Basic ${btoa(wpUserName + ":" + appPassword)}`,
  };

  // Get Portfolios from Shiny Coders
  const { data, error, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_WP_REST_URL}/portfolio?_embed&per_page=100`,
        {
          headers: auth,
        }
      );
      const data = await res.json();

      let pfs = [];

      if (data && data?.length) {
        data.forEach((el, i) => {
          let pf = {
            id: el?.id,
            title: el?.title?.rendered,
            content: el?.content?.rendered,
            featuredImage: el?._embedded["wp:featuredmedia"]["0"]["source_url"],
            // categories: el?._embedded["wp:term"]["0"],
          };

          pfs.push(pf);
        });
      }

      return pfs;
    },
  });

  console.log(data);

  return [data];
};

export default usePortfolios;
