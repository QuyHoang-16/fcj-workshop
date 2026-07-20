---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.9. </b> "
---

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc                                                                                                                                                                                   | Ngày bắt đầu | Trạng thái | Nguồn tài liệu                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ----------------------------------------- |
| 1   | - Triển khai giám sát ứng dụng Aura Academic với Amazon CloudWatch: Cấu hình CloudWatch Logs để thu thập và quản lý nhật ký tập trung từ các container Spring Boot Backend (chạy trên ECS Fargate) và các phiên bản EC2 GPU. Thiết lập hệ thống cảnh báo (CloudWatch Alarms) khi các chỉ số tài nguyên vượt quá ngưỡng an toàn để nhanh chóng phát hiện các sự cố hệ thống. | 15/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 2   | -  Quản lý hiệu năng và độ trễ của cụm AI được liên kết: Giám sát chặt chẽ thời gian phản hồi (độ trễ) của luồng API đến thông qua Bộ cân bằng tải ứng dụng (ALB) đến máy chủ phụ trợ, cũng như luồng xử lý AI cục bộ (GPU EC2 chạy YOLOv8) và luồng gọi API GenAI bên ngoài (Google Gemini, Groq API). Phân tích để tối ưu hóa tốc độ xử lý của các tính năng chấm điểm và phân tích bài học IELTS. | 16/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 3   | - Tối ưu hóa ngân sách hệ thống với AWS Budgets: Sử dụng công cụ AWS Budgets để thiết lập ngưỡng cảnh báo chi phí theo thời gian thực. Hành động này kiểm soát chặt chẽ tiến độ tiêu thụ tài nguyên trong quá trình thử nghiệm hệ thống Hybrid Cloud, đảm bảo số dư tín dụng 200 đô la luôn nằm trong phạm vi an toàn. | 17/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 4   | - Quản trị thực tiễn và dọn dẹp tài nguyên rác: Tiến hành rà soát định kỳ toàn bộ hệ thống điều khiển, xóa các phiên bản Docker Image cũ không sử dụng trên ECR, các ổ đĩa EBS mồ côi hoặc các bản sao lưu cấu hình cũ để tối ưu hóa không gian lưu trữ và loại bỏ hoàn toàn các chi phí ẩn | 18/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |




### Kết quả đạt được tuần 9:

* Đã hoàn thành xuất sắc tất cả các mục tiêu đề ra trong tuần.
* Đảm bảo dự án thực tập Aura Academic luôn đúng tiến độ.


