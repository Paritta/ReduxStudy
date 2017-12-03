import { filterChemical, filterComputer, filterInformation, filterMaterial, filterNursing } from "./Filter";

describe("Filter reducer", () => {
    it("should handle FILTER_MATERIAL", () => {
        const nextState = filterChemical("filter_Chemical");
        expect(nextState).toEqual({
            payload: "filter_Chemical",
            type: "filter/filter_Chemical"
        })
    });

    it("should handle FILTER_COMPUTER", () => {
        const nextState = filterComputer("filter_Computer");
        expect(nextState).toEqual({
            payload: "filter_Computer",
            type: "filter/filter_Computer"
        })
    });

    it("should handle FILTER_INFORMATION", () => {
        const nextState = filterInformation("filter_Information");
        expect(nextState).toEqual({
            payload: "filter_Information",
            type: "filter/filter_Information"
        })
    });

    it("should handle FILTER_MATERIAL", () => {
        const nextState = filterMaterial("filter_Material");
        expect(nextState).toEqual({
            payload: "filter_Material",
            type: "filter/filter_Material"
        })
    });

    it("should handle FILTER_NURSING", () => {
        const nextState = filterNursing("filter_Nursing");
        expect(nextState).toEqual({
            payload: "filter_Nursing",
            type: "filter/filter_Nursing"
        })
    });
});