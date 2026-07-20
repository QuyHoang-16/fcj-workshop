---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.11. </b> "
---


### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc                                                                                                                                                                                   | Ngày bắt đầu | Trạng thái | Nguồn tài liệu                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ----------------------------------------- |
| 1   | - Tối ưu hóa và kiểm thử các tính năng AI cốt lõi trên nền tảng đám mây: Vận hành và tinh chỉnh quy trình xử lý thông minh của Aura Academic. Kiểm thử tính năng phân tích ngôn ngữ quy mô lớn bằng cách kết nối hệ thống phụ trợ với API Google Gemini / API Groq, đồng thời kiểm thử các tính năng nhận dạng và chấm điểm cục bộ thông qua cụm GPU EC2 chạy YOLOv8. | 29/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 2   | -  Tích hợp các luồng dịch vụ bảo mật và thông báo phía giao diện người dùng: Cấu hình các luồng email xác minh OTP cho học sinh/giáo viên thông qua Google SMTP kết nối từ hệ thống đám mây. Đồng thời, triển khai cấu hình lớp bảo mật AWS WAF phía trước CloudFront để chặn các yêu cầu độc hại tấn công giao diện được lưu trữ trên S3. | 30/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 3   | - Tăng cường bảo mật thông tin hệ thống: Xem xét lại các chính sách bảo mật IAM, siết chặt Nhóm bảo mật của các cụm ECS Fargate và EC2 GPU. Chỉ cho phép các yêu cầu API hợp lệ được định tuyến từ ALB và hạn chế truy cập internet một chiều từ Cổng NAT. | 01/07/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 4   | - Kiểm thử khả năng chịu tải của hệ thống: Mô phỏng một lượng lớn yêu cầu đồng thời (Yêu cầu HTTPS) từ người dùng gửi qua CloudFront/ALB. Đo lường khả năng chịu tải của container Spring Boot trên Fargate và tốc độ phản hồi của các cụm máy chủ AI khi xử lý đồng thời các bài thi IELTS. | 02/07/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |




### Kết quả đạt được tuần 11:

* Đã hoàn thành xuất sắc tất cả các mục tiêu đề ra trong tuần.
* Đảm bảo dự án thực tập Aura Academic luôn đúng tiến độ.


