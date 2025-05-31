import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders button and triggers click event", () => {
  render(<App />);

  const button = screen.getByText("Go To blue page");

  // تأكد الزر موجود
  expect(button).toBeInTheDocument();

  // جرّب تضغط عليه (مش ضروري نتحقق من تغيير الصفحة الآن)
  fireEvent.click(button);

  // تأكد أنه لسه موجود (وما كسر الصفحة مثلاً)
  expect(screen.getByText("Go To blue page")).toBeInTheDocument();
});
