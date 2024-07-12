import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import krishna from "../../../public/krishna.jpg";
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
const API_KEY = "11fc24b610mshb590e5579cd11cdp10e6f4jsn28ebe3908595";
const API_HOST = "bhagavad-gita3.p.rapidapi.com";

function ChapterDetail() {
  const { id } = useParams();
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    const fetchChapter = async () => {
      const options = {
        method: "GET",
        url: `${API_URL}${id}/`,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setChapter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChapter();
  }, [id]);

  if (!chapter) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-gray-900 min-h-screen p-8 text-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${krishna})` }}
    >
      <div className="bg-gray-800 bg-opacity-80 rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-orange-400 text-lg font-semibold mb-2">
          Chapter {chapter.chapter_number}
        </h2>
        <h1 className="text-4xl font-bold mb-4">{chapter.name_translated}</h1>
        <p className="text-xl mb-4">{chapter.chapter_summary}</p>
        <h2 className="text-2xl font-semibold mt-4">Details</h2>
        <ul className="list-disc list-inside">
          <li>Translated Name: {chapter.name_translated}</li>
          <li>Verses Count: {chapter.verses_count}</li>
          <li>Chapter Number: {chapter.chapter_number}</li>
        </ul>
      </div>
    </div>
  );
}

export default ChapterDetail;
