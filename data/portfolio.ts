// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "斎藤　彩",
  role: "webデザイナー",
  bio: "/STUDIO勉強中です。",
  avatarUrl: "/images/avatar.jpg", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "学習中" },
  { name: "React", level: "学習中" },
  { name: "TypeScript", level: "学習中" },
  { name: "Next.js", level: "学習中" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "プロジェクト名",
    description: "どんなものを作ったか、簡単な説明を書いてください。",
    techStack: ["Next.js", "TypeScript"],
    url: "https://github.com/あなたのユーザー名/リポジトリ名",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/あなたのユーザー名",
  email: "あなたのメールアドレス（任意）",
};
