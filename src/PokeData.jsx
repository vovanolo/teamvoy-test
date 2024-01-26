import React from "react";

export default function PokeData({
  pokeImage,
  type,
  attack,
  defense,
  hp,
  spAttack,
  spDefence,
  speed,
  weight,
  totalMoves,
}) {
  return (
    <div className="max-h-screen col-span-1 text-center border-double border-4  border-sky-500 rounded-lg ">
      Pokemon Info
      {pokeImage !== null ? (
        <div className="one_data_card flex flex-col">
          <img className="max-h-56 max-w-56 mx-auto" src={pokeImage} alt="" />
          <table className="max-h-56 max-w-56 mx-auto border-collapse border border-slate-500 mb-9">
            <tbody>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">Type</td>
                <td className="border border-slate-600 mx-4 my-4">{type}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">Attack</td>
                <td className="border border-slate-600 mx-4 my-4">{attack}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">Defense</td>
                <td className="border border-slate-600 mx-4 my-4">{defense}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">HP</td>
                <td className="border border-slate-600 mx-4 my-4">{hp}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">SP Attack</td>
                <td className="border border-slate-600 mx-4 my-4">
                  {spAttack}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">
                  SP Defence
                </td>
                <td className="border border-slate-600 mx-4 my-4">
                  {spDefence}
                </td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">Speed</td>
                <td className="border border-slate-600 mx-4 my-4">{speed}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">Weight</td>
                <td className="border border-slate-600 mx-4 my-4">{weight}</td>
              </tr>
              <tr>
                <td className="border border-slate-600 mx-4 my-4">
                  Total Moves
                </td>
                <td className="border border-slate-600 mx-4 my-4">
                  {totalMoves}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>Please choose your pokemon</div>
      )}
    </div>
  );
}
