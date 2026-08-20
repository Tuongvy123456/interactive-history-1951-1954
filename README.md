# VNR

Repository này chứa frontend và backend trong cùng một nơi nhưng tách biệt hoàn toàn:

```text
VNR/
├── frontend/   # React + Vite
└── backend/    # Dành cho nhóm backend
```

## Chạy frontend

Yêu cầu Node.js 20 trở lên.

```bash
cd frontend
npm install
npm run dev
```

Sao chép `frontend/.env.example` thành `frontend/.env` nếu cần đổi địa chỉ API.

## Quy ước làm việc

- Mã frontend và dependency frontend chỉ nằm trong `frontend/`.
- Nhóm frontend không chỉnh sửa nội dung trong `backend/`.
- Nhóm backend có thể khởi tạo công nghệ riêng trong `backend/` mà không ảnh hưởng frontend.
- Frontend đọc địa chỉ API từ biến `VITE_API_BASE_URL`.

