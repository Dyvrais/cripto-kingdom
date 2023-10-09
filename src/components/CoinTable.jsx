export default function CoinTable({ tableData }) {
  //   console.log(table);
  return (
    <table className="table-auto text-white w-[70%] m-auto">
      <thead>
        <tr>
          <th className="bg-[#7319bd] text-sm md:text-base rounded-l-lg p-2">
            Coin
          </th>
          <th className="bg-[#7319bd] text-sm md:text-base p-2">Symbol</th>
          <th className="bg-[#7319bd] text-sm md:text-base p-2">
            Exchange rate
          </th>
          <th className="bg-[#7319bd] text-sm md:text-base rounded-r-lg p-2">
            Price change
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white">
        {tableData.map((coin) => {
          return (
            <tr
              className="hover:bg-violet-950 hover:bg-opacity-30"
              key={coin.id}
            >
              <td className="p-2 text-sm md:text-base text-center">
                <img className="w-1/4 md:w-1/6 m-auto" src={coin.image} />
                <span>{coin.name}</span>
              </td>
              <td className="p-2 text-sm md:text-base text-center">
                {coin.symbol.toUpperCase()}
              </td>
              <td className="p-2 text-sm md:text-base text-center">
                ${coin.current_price.toLocaleString()}
              </td>
              <td className="p-2 text-sm md:text-base text-center">
                {coin.price_change_percentage_24h}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
