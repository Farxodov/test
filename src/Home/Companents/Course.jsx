import axios from "axios";
import { useEffect, useState } from "react";
import Coursechart from "./CourseChart";
import { Trans, useTranslation } from "react-i18next";
import HighCheap from "./HighCheap";
import { urlApi } from "../../url";
import Imgandtext from "./Imgandtext";
import { useGetCourseYear, useGetTableCourse } from "../../hooks/useGetTest";

function Course() {
  const [arr, setArr] = useState();
  const [arrBS, setArrBS] = useState([]);

  const [highestS, setHighestS] = useState({ course: 1, name: "" });
  const [highestB, setHighestB] = useState({ course: Infinity, name: "" });

  const { t } = useTranslation();
  const { data } = useGetCourseYear();
  const tableCourse = useGetTableCourse();

  useEffect(() => {
    if (data?.length > 0) {
      setArr(data);
    }
  }, [data]);

  useEffect(() => {
    if (tableCourse.data?.length > 0) {
      setArrBS(tableCourse.data);
    }
  }, [tableCourse.data]);

  useEffect(() => {
    if (arrBS.length === 0) return;

    let maxSell = { course: 0, name: "" };
    let minBuy = { course: Infinity, name: "" };

    for (const bank of arrBS) {
      if (bank.sell > maxSell.course) {
        maxSell = { course: bank.sell, name: bank.name };
      }

      if (bank.buy < minBuy.course) {
        minBuy = { course: bank.buy, name: bank.name };
      }
    }

    setHighestS(maxSell);
    setHighestB(minBuy);
  }, [arrBS]);

  return (
    <>
      <Imgandtext />

      <div className="bg-[#f5f1f1] dark:bg-[#151527] w-full min-h-screen pb-10">
        <div className="max-w-[1500px] h-full m-auto px-4 sm:px-8">
          {arr ? (
            <>
              <h1 className="dark:text-white text-2xl text-center mb-4 font-bold pt-6 pb-2 ">
                {t("last_course")} 1$ = {arr[arr.length - 1].course}sum (
                {arr[arr.length - 1].date})
              </h1>

              <HighCheap highestSell={highestS} cheapestBuy={highestB} />
            </>
          ) : (
            <div>
              <div className="flex items-center justify-center h-screen">
                <div className="w-40 h-40 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}

          <div className="w-full m-auto h-[400px] mt-10">
            <Coursechart data={arr} />
          </div>
        </div>

        {arrBS.length > 0 ? (
          <div className="mt-10 mx-4 sm:mx-auto max-w-4xl shadow-xl rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-950">
                  <tr>
                    <th className="px-3 py-3 text-left text-2xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 sm:px-6 sm:text-xs">
                      {<Trans i18nKey={"bankname"} />}
                    </th>
                    <th className="px-3 py-3 text-right text-2xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 sm:px-6 sm:text-xs">
                      {<Trans i18nKey={"sell"} />}
                    </th>
                    <th className="px-3 py-3 text-right text-2xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 sm:px-6 sm:text-xs">
                      {<Trans i18nKey={"buy"} />}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {arrBS.map((p, index) => {
                    const getChangeDisplay = (change) => {
                      const isNegative = change < 0;
                      const arrow = isNegative ? "↓" : change > 0 ? "↑" : "-";
                      const color = isNegative
                        ? "text-red-400 dark:text-red-300"
                        : change > 0
                        ? "text-green-400 dark:text-green-300"
                        : "text-gray-500 dark:text-gray-600";
                      const displayChange = Math.abs(change);

                      return (
                        <span
                          className={`ml-1 text-[9px] sm:ml-2 sm:text-xs font-semibold ${color}`}
                        >
                          {arrow} {displayChange === 0 ? "0" : displayChange}
                        </span>
                      );
                    };

                    const isHighestSell =
                      p.name === highestS.name && p.sell === highestS.course;
                    const isCheapestBuy =
                      p.name === highestB.name && p.buy === highestB.course;

                    let rowClass =
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800";
                    if (isHighestSell || isCheapestBuy) {
                      rowClass =
                        "bg-green-100 dark:bg-green-900/50 hover:bg-green-200 dark:hover:bg-green-800/50 transition duration-150 ease-in-out";
                    } else {
                      rowClass += " hover:bg-gray-100 dark:hover:bg-gray-700";
                    }

                    return (
                      <tr key={p.name} className={rowClass}>
                        <td className="px-3 py-3 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-gray-100 sm:px-6 sm:py-4 sm:text-sm">
                          {p.name}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-xs text-right font-mono sm:px-6 sm:py-4 sm:text-sm">
                          <span
                            className={`font-bold ${
                              isHighestSell
                                ? "text-green-600 dark:text-green-300 bold underline"
                                : "text-gray-900 dark:text-gray-100"
                            } text-xs sm:text-base`}
                          >
                            {p.sell}
                          </span>
                          {getChangeDisplay(p["sell-minus"])}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-xs text-right font-mono sm:px-6 sm:py-4 sm:text-sm">
                          <span
                            className={`font-bold ${
                              isCheapestBuy
                                ? "text-green-600 dark:text-green-300 bold underline"
                                : "text-gray-900 dark:text-gray-100"
                            } text-xs sm:text-base`}
                          >
                            {p.buy}
                          </span>
                          {getChangeDisplay(p["buy-minus"])}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            Loading bank rates...
          </p>
        )}
      </div>
    </>
  );
}

export default Course;
