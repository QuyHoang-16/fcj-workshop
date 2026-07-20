---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.10. </b> "
---


### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc                                                                                                                                                                                   | Ngày bắt đầu | Trạng thái | Nguồn tài liệu                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------- | ----------------------------------------- |
| 1   | - Triển khai hệ thống Backend lõi Aura Academic lên đám mây: Chính thức triển khai ảnh Docker Backend Spring Boot lên cụm Amazon ECS kết hợp với AWS Fargate. Cấu hình các định nghĩa tác vụ và thiết lập bộ cân bằng tải ứng dụng (ALB) để phân phối lưu lượng truy cập đồng đều trên các vùng khả dụng (AZ A và AZ B). | 22/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 2   | -  Cấu hình cơ sở hạ tầng mạng bảo mật (VPC & Mạng con): Thiết lập môi trường mạng ảo Amazon VPC. Cấu hình Cổng Internet (IGW) cho các luồng vào/ra, phối hợp với Cổng NAT trong Mạng con công cộng để cho phép các container nằm trong Mạng con riêng tư kết nối an toàn với internet để gọi các dịch vụ bên ngoài. | 23/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 3   | - Thiết lập cụm điện toán AI chuyên dụng (các phiên bản GPU EC2): Cấu hình môi trường và triển khai các ảnh Docker chứa mô hình YOLOv8 cùng với LiteLLM lên các phiên bản GPU EC2. Thiết lập cơ chế Nhóm Tự động Mở rộng (Auto Scaling Group) để đảm bảo hệ thống tự động điều chỉnh số lượng máy ảo dựa trên khối lượng bài tập AI cần xử lý. | 24/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |
| 4   | - Kiểm thử tích hợp các luồng dữ liệu liên kết: Kiểm tra và cấu hình quyền AWS IAM cho các dịch vụ để tương tác an toàn. Kiểm thử luồng đồng bộ hóa mã nguồn giao diện từ GitHub Actions thông qua S3/CloudFront và xác minh kết nối lưu trữ dữ liệu từ Backend đến cơ sở dữ liệu MongoDB Atlas bên ngoài. | 25/06/2026   | Đã hoàn thành      | <https://cloudjourney.awsstudygroup.com/> |




### Kết quả đạt được tuần 10:

* Đã hoàn thành xuất sắc tất cả các mục tiêu đề ra trong tuần.
* Đảm bảo dự án thực tập Aura Academic luôn đúng tiến độ.


