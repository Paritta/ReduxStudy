import { animateDown, animateTurn} from "./Animate";

describe("Animate reducer", () => {
    it("should handle ANIMATION_TURN", () => {
        const nextState = animateTurn();
        expect(nextState).toEqual({
            type: "animate/animate_Turn"
        })
    });

    it("should handle ANIMATION_DOWN", () => {
        const nextState = animateDown();
        expect(nextState).toEqual({
            type: "animate/animate_Down"
        })
    });
});
