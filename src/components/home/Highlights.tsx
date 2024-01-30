import { useCallback, useEffect, useState } from "react";
import { highlightsData } from "../../data/highlights";
import { Highlights } from "../../interfaces/data";
import Loader from "../UI/Loader";
import SwiperCard from "../subComponents/SwiperCard";

const HighlightsComponent = () => {
  const [highlights, setHighlights] = useState<Highlights[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | "">("");

  // fetching dummy data: Actual API Call comes here
  const fetchHighlights = useCallback(() => {
    try {
      setLoading(true);
      setHighlights(highlightsData);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHighlights();
  }, [fetchHighlights]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-[24px]">
          <h6>Highlights</h6>
          {error || (highlights && highlights.length === 0) ? (
            <h6 className="text-center">No Highlights to show</h6>
          ) : (
            highlights &&
            highlights.length > 0 && <SwiperCard highlights={highlights} />
          )}
        </div>
      )}
    </>
  );
};

export default HighlightsComponent;
