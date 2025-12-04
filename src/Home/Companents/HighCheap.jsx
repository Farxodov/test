import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

function HighCheap({ highestSell, cheapestBuy }) {
  const design =
    "px-8 py-2 font-serif text-[15px] border border-blue-500 text-blue-500 peer-checked:bg-blue-500 peer-checked:text-white transition";
  const {t} = useTranslation()
  const [buySell, setBuySell] = useState(true);
  const [dValue, setDvalue] = useState(1);

  return (
    <>
      <div className="flex not-1md:flex-col gap-2">
        <div className="w-full dark:text-white bg-[#e5e5e5] p-8 dark:bg-[#22223b] rounded-2xl">
          <h1 className=" font-serif font-bold text-2xl 1md:text-4xl">
            {<Trans i18nKey={"best_value"} />}
          </h1>
          <hr className=" my-5" />
          <div className="flex w-full not-sm:flex-col gap-5 justify-between">
            <div className=" sm:w-[50%] border-2 text-center dark:border-white rounded-2xl p-4">
              <h1 className="font-bold font-serif text-md 1md:text-2xl">
                <Trans i18nKey={"best_buy"} />
              </h1>
              <hr className="my-2" />
              <h1 className="font-medium">
                <Trans i18nKey={"bank"} />: {highestSell.name}
              </h1>
              <h1 className="font-sans">
                <Trans i18nKey={"course"} />: {highestSell.course}sum
              </h1>
            </div>

            <div className="sm:w-[50%] border-2 text-center dark:border-white rounded-2xl p-4">
              <h1 className="font-bold font-serif text-md 1md:text-2xl">
                <Trans i18nKey={"best_sell"} />
              </h1>
              <hr className="my-2" />
              <h1 className="font-medium">
                <Trans i18nKey={"bank"} />: {cheapestBuy.name}
              </h1>
              <h1 className="font-sans">
                <Trans i18nKey={"course"} />: {cheapestBuy.course} sum
              </h1>
            </div>
          </div>
        </div>
        <div className=" dark:text-white bg-[#e5e5e5] p-8 w-full 1md:w-[500px] dark:bg-[#22223b] rounded-2xl flex flex-col gap-2 items-center">
          <div className="flex">
            <label className="cursor-pointer " onClick={() => setBuySell(true)}>
              <input
                type="radio"
                name="choice"
                value="1"
                className="peer hidden"
                defaultChecked
              />
              <div className={`rounded-tl-xl rounded-bl-xl  ${design}`}>
                {t("buy")}
              </div>
            </label>

            <label className="cursor-pointer" onClick={() => setBuySell(false)}>
              <input
                type="radio"
                name="choice"
                value="2"
                className="peer hidden"
              />
              <div className={`rounded-tr-xl rounded-br-xl  ${design}`}>
                {t("sell")}
              </div>
            </label>
          </div>
          {/* <label
            for="price"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Price
          </label> */}
<br />
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">$</span>
            </div>

            <input
              type="text"
              name="price"
              id="price"
              className="
                block w-full 
                rounded-md 
                border-gray-300 dark:border-gray-600 
                pl-7 pr-12 py-2 
                text-gray-900 dark:text-white 
                bg-white dark:bg-[#151527] 
                placeholder-gray-400 dark:placeholder-gray-500
                focus:ring-indigo-500 focus:border-indigo-500 
                sm:text-sm
                transition duration-300
            "
              placeholder="0.00"
              aria-describedby="price-currency"
              value={dValue}
              onChange={(e) => {
                setDvalue(e.target.value);
              }}
            />

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span
                className="text-gray-500 dark:text-gray-400 sm:text-sm"
                id="price-currency"
              >
                USD
              </span>
            </div>
          </div>

          <p className="mt-2 text-md text-black dark:text-white">
            {Number(dValue) *
              Number(buySell ? cheapestBuy.course : highestSell.course)}{" "}
            sum
          </p>
        </div>
      </div>
    </>
  );
}

export default HighCheap;
