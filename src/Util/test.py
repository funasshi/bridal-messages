from PIL import Image
import os

def compress_image(image_path, max_size, output_path):
    # 画像を開く
    img = Image.open(image_path)

    # 画像の品質を下げながら保存する
    quality = 99  # 初期品質を設定
    while quality > 0:
        img.save(output_path, "JPEG", quality=quality)
        file_size = os.path.getsize(output_path) / 1024  # サイズをKB単位で取得
        
        print(f"Quality: {quality}, Size: {file_size}KB")
        
        if file_size <= max_size:
            break
        
        quality -= 1  # 品質を下げる
        if quality == 0:
            print("Cannot compress the image enough to meet the target size")
            break

# 使用例
image_path = "example.jpg"  # 圧縮したい画像のパス
max_size = 500  # 最大ファイルサイズ（KB）
output_path = "compressed.jpg"  # 圧縮後の画像の出力パス
compress_image(image_path, max_size, output_path)