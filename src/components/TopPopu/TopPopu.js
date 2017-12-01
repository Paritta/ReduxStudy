import React from "react";

const propTypes = {
};

const defaultTypes = {
};

export const TopPopu = ({ PageData }) => {
    const PgData = PageData;
    const Pending = PgData.pending;
    const PgDataArr = [];
    let PgDataSort;

    if(!Pending) {
        for(let key in PgData.data) {
            PgDataArr.push(PgData.data[key])
        }

        PgDataSort = PgDataArr.sort((x, y) => {
            if(x.HertCount > y.HeartCount) {
                return 1;
            }
            if(x.HertCount < y.HeartCount) {
                return -1;
            }
            return 0;
        });
    }

    return (
        <div>
            {
                !Pending &&
                PgDataSort.map((item, key) =>
                    <div>
                        {
                            item.values.StudyTitle
                        }
                    </div>
                )
            }
        </div>
    )
};

TopPopu.propTypes = propTypes;
TopPopu.defaultTypes = defaultTypes;

export default TopPopu;
