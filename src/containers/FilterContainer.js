import React from "react";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import { filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical } from "../modules/Filter";
import PropTypes from "prop-types";
import { getFilter } from "../selector";

const propTypes = {
    filterMaterial: PropTypes.func.isRequired,
    filterNursing: PropTypes.func.isRequired,
    filterInformation: PropTypes.func.isRequired,
    filterComputer: PropTypes.func.isRequired,
    filterChemical: PropTypes.func.isRequired
};

const defaultTypes = {
    filterMaterial () {},
    filterNursing () {},
    filterInformation () {},
    filterComputer () {},
    filterChemical () {}
};

function FilterContainer({ filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical }) {
    return (
        <div>
            <Filter
                filterMaterial={filterMaterial}
                filterNursing={filterNursing}
                filterInformation={filterInformation}
                filterComputer={filterComputer}
                filterChemical={filterChemical}
            />
        </div>
    )
}

FilterContainer.propTypes = propTypes;
FilterContainer.defaultTypes = defaultTypes;

export default connect(
    state => ({ Filter: getFilter(state) }) ,
    { filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical }
)(FilterContainer);
