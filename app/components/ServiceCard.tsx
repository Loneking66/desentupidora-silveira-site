type ServiceCardProps = {
    title: string
    description: string
}

export default function ServiceCard({
    title,
    description,
} :ServiceCardProps) {
    return (
        <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-slate-900 text-xl font-bold mb-4">
                {title}
            </h3>

            <p className="text-gray-600">
                {description}
            </p>
        </div>
    )
}