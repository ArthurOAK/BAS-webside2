# คู่มือการติดตั้ง BAS Website บน Linux Server

เอกสารนี้เป็นคู่มือสำหรับการตั้งค่าและปรับใช้ BAS Website บนเซิร์ฟเวอร์ Linux ด้วย Node.js และ PNPM

> โปรดอ่านขั้นตอนการติดตั้งอย่างละเอียดเพื่อความถูกต้อง

## ขั้นตอนการปรับใช้

### 1. การเตรียมเซิร์ฟเวอร์

1. อัปเดตแพ็คเกจของเซิร์ฟเวอร์:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. ติดตั้ง Node.js เวอร์ชัน 22:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

3. ติดตั้ง PNPM:
   ```bash
   corepack enable
   corepack prepare pnpm@latest --activate
   ```

### 2. การเตรียมโครงการ

1. โคลนหรืออัปโหลดโครงการของคุณไปยังเซิร์ฟเวอร์:
   ```bash
   git clone <your-repo-url> หรือ unzip ไฟล์เว็บไซต์
   cd <project-directory>
   ```

2. ติดตั้ง dependencies ด้วย PNPM:
   ```bash
   pnpm install
   ```

3. สร้างไฟล์โปรเจกต์สำหรับการปรับใช้:
   ```bash
   pnpm i18n:build && pnpm build
   ```

### 3. การตั้งค่าเซิร์ฟเวอร์

#### การติดตั้ง `serve` (สำหรับการให้บริการไฟล์แบบ Static)

1. ติดตั้งแพ็คเกจ `serve` แบบ global:
   ```bash
   pnpm add -g serve
   ```

2. เรียกใช้แอป:
   ```bash
   serve -s dist -l 3000
   ```

#### การตั้งค่า Nginx (ถ้ามีการใช้ Nginx)

1. ติดตั้ง Nginx:
   ```bash
   sudo apt install nginx -y
   ```

2. แก้ไขไฟล์คอนฟิก `/etc/nginx/sites-available/default`:
   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   เพิ่มหรือแก้ไขเนื้อหาดังนี้:
   ```nginx
   server {
       listen 80;
       server_name <your-domain>;

       location / {
           root /path/to/your/project/dist;
           index index.html;
           try_files $uri /index.html;
       }
   }
   ```

3. รีสตาร์ท Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

### 4. การตั้งค่าเป็นบริการ (Service)

#### การสร้างไฟล์บริการ Systemd

1. สร้างไฟล์บริการใหม่สำหรับแอปของคุณ:
   ```bash
   sudo nano /etc/systemd/system/bas-website.service
   ```

2. เพิ่มเนื้อหาดังนี้:
   ```ini
   [Unit]
   Description=BAS Website
   After=network.target

   [Service]
   Type=simple
   User=<your-username>
   WorkingDirectory=/path/to/your/project
   ExecStart=/usr/bin/serve -s dist -l 3000
   Restart=on-failure

   [Install]
   WantedBy=multi-user.target
   ```

   **หมายเหตุ**: แก้ไข `<your-username>` และ `/path/to/your/project` ให้ตรงกับเซิร์ฟเวอร์ของคุณ

3. รีโหลด Systemd เพื่อให้รู้จักบริการใหม่:
   ```bash
   sudo systemctl daemon-reload
   ```

4. เปิดใช้งานและเริ่มบริการ:
   ```bash
   sudo systemctl enable bas-website
   sudo systemctl start bas-website
   ```

5. ตรวจสอบสถานะของบริการ:
   ```bash
   sudo systemctl status bas-website
   ```

### 5. การตรวจสอบ

1. เปิดเบราว์เซอร์และเข้าถึงโดเมนหรือ IP ของเซิร์ฟเวอร์ของคุณ
2. หากทุกอย่างถูกตั้งค่าอย่างถูกต้อง คุณจะเห็นหน้าเว็บไซต์ของคุณ

## หมายเหตุเพิ่มเติม

- ตรวจสอบให้แน่ใจว่าพอร์ตที่คุณใช้ (เช่น 3000) เปิดอยู่ในไฟร์วอลล์ของเซิร์ฟเวอร์:
  ```bash
  sudo ufw allow 3000
  ```

- หากมีการใช้ HTTPS ให้ตั้งค่า SSL ด้วย Certbot หรือวิธีอื่นที่เหมาะสม

## การแก้ไขเนื้อหาเว็บไซต์

- สามารถแก้ไขเนื้อหาเว็บไซต์ได้โดยเปลี่ยนค่าในไฟล์ `src/data`

- หลังแก้ไขเนื้อหาเว็บไซต์ ต้องมีการลบไฟล์ `dist` และเริ่มต้นใหม่ด้วยคําสั่ง `pnpm i18n:build && pnpm build`

> คำเตือน: การแก้ไขเนื้อหาเว็บไซต์อาจมีผลกระทบต่อเว็บไซต์ของคุณ และควรมีการตรวจสอบก่อนการแก้ไข