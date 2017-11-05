import React from "react";
import Filter from "../components/Filter";
import { connect } from "react-redux";
import { filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical } from "../modules/Filter";
import PropTypes from "prop-types";

const propTypes = {
};

const defaultTypes = {
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
    state => ({ Filter: state.Filter }) ,
    { filterMaterial, filterNursing, filterInformation, filterComputer, filterChemical }
)(FilterContainer);
