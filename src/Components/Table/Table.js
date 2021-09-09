import "../Table/Table.scss"
import React from 'react'
import { info } from "../../TableInfo"

export default function Table() {
    return (
        <div className="table">
            <div className="table-wrap">
                <table className="table-container">
                    <tr className="table-heading">
                        <td>#</td>
                        <td>Platform</td>
                        <td>Last Traded Price</td>
                        <td>Buy / Sell Price</td>
                        <td>Difference</td>
                        <td>Savings</td>
                    </tr>
                    {info.map((i) =>
                        <tr className="table-content">
                            <td className="c1">{i.id}</td>
                            <td className="c2"><img src={i.src} className="src" />{i.platform}</td>
                            <td className="c3">{i.LTP}</td>
                            <td className="c4">{i.BnS}</td>
                            <td className="c5" style={
                                i.Diff > 0 ? { color: "#5dc7c2" } : { color: "red" }
                            }>{i.Diff} %</td>
                            <td className="c6"
                                style={
                                    i.Diff > 0 ? { color: "#5dc7c2" } : { color: "red" }
                                }>{i.Savings}</td>
                        </tr>
                    )};



                </table>

            </div>
        </div>
    )
}
