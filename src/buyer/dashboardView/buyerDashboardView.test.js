import {getUserTotalEarning} from "./buyerDashboardView";
import {projectInfo} from "../../services/staticData";

const testingUserInfo = [projectInfo];

test("user total earning calculation is correct", () => {
    expect(getUserTotalEarning(testingUserInfo)).toEqual(10000);
});

